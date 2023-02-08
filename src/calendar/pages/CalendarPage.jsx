import { useState } from "react";
import { Calendar } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer } from "../../helpers";

import { CalendarEvent } from "../";
import { CalendarModal } from "../";
import { useUiStore } from "../../hooks";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { onSetActiveEvent } from "../../store";
import { useEffect } from "react";
import { useAuthStore } from "../../auth";

export const CalendarPage = () => {

    const { user } = useAuthStore();

    const { openDateModal } = useUiStore(); //Import propierties and methods from custom hook.

    const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
    

    const [lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'week') 
                                                                                            /*
                                                                                               we used this function for obtain the last view and get this by localsotrage, 
                                                                                               in case this dont save nothing for default the view is 'week' by operator ||

                                                                                            */
    
    const eventsStyleGetter = (event, start, end, isSelected) => {  //we will pass by props the function to the method eventPropGetter 

        const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid );
    
        const style = { //styles event
            backgroundColor: isMyEvent ? '#22c55e' : '#465660',
            borderRadius:'4px',
            opacity:0.8
    
        }
    
        return{
            style
        }
    }
    
    
    const onDoubleClick = ( event ) => {
        console.log({ click: event });
        openDateModal();
    };
    
    const onSelect = ( event ) => { //this function select the event when i have to sent to my functions to contain the data to posterior send to reducers. 
        onSetActiveEvent(event);
        setActiveEvent(event)
    };
    
    const onViewChanged = (event) => { //grab the event from the ui, in this case when the view change. 
        localStorage.setItem('lastView', event); //we save in the localstorage the view when this change
    }

    useEffect( () => {
        startLoadingEvents();
    }, [events])

    return(
        <div className="w-[24rem] sm:w-[42rem] p-4  md:w-[44rem] lg:w-[56rem]  mx-auto">
            <div className="p-4 relative">
                <Calendar
                localizer={localizer}
                events={ events }
                defaultView = {lastView}
                startAccessor="start"
                endAccessor="end"
                className="h-[50vh] sm:h-[60vh] md:h-[70vh] m-4 "
                // style={{ height: 'calc( 50vh - 80px ) ' }}
                eventPropGetter={ eventsStyleGetter }
                components={{ 
                    event:CalendarEvent
                }}
                onDoubleClickEvent = { onDoubleClick }
                onSelectEvent = { onSelect }
                onView = { onViewChanged }
                />

            </div>
            <CalendarModal/>
        </div>
    )
}