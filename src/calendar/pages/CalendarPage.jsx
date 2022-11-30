import { useState } from "react";
import { Calendar } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours, set } from 'date-fns' //these  libraries help us to managent the date
import { localizer } from "../../helpers";

import { CalendarEvent } from "../";
import { CalendarModal } from "../";



export const CalendarPage = () => {

    const events = [{ //Make the events for the calendar
        title:'cumpleaños de mi mama',
        notes:'comprar el pastel',
        start: new Date(),
        end: addHours(new Date(), 2),  /*
                                            These method receive two params , the first is the object Date, the second the number of hours
                                            to finish. 
                                        */
        bgColor:'#22d3ee',
        user:{
            _id:'123',
            name:'samir'
    
        }
    }]

    const [lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'week') 
                                                                                            /*
                                                                                               we used this function for obtain the last view and get this by localsotrage, 
                                                                                               in case this dont save nothing for default the view is 'week' by operator ||

                                                                                            */
    
    const eventsStyleGetter = (event, start, end, isSelected) => {  //we will pass by props the function to the method eventPropGetter 

    
        const style = { //styles event
            backgroundColor:'#22d3ee',
            borderRadius:'0px',
            opacity:0.8
    
        }
    
        return{
            style
        }
    }
    
    
    const onDoubleClick = ( event ) => {
        console.log({ doubleClick: event });
    };
    
    const onSelect = ( event ) => {
        console.log({ click: event});
    };
    
    const onViewChanged = (event) => {
        localStorage.setItem('lastView', event); //we save in the localstorage the view when this change
    }


    
    return(
        <>
            <div className="p-4">
                <Calendar
                localizer={localizer}
                events={events}
                defaultView = {lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc( 100vh - 80px )' }}
                eventPropGetter={ eventsStyleGetter }
                components={{
                    event:CalendarEvent
                }}
                onDoubleClick = { onDoubleClick }
                onSelectEvent = { onSelect }
                onView = { onViewChanged }
                />
            </div>
            <CalendarModal/>
        </>
    )
}