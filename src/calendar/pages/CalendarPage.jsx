import { Calendar } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours, set } from 'date-fns' //these  libraries help us to managent the date

import { localizer } from "../../helpers";
import { CalendarEvent } from "../";
import { useState } from "react";



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
                                                                                                Usamos esta funcion para obteneer
                                                                                                la ultima vista y la obtenemos del localStorage
                                                                                                en caso de no haber guardado nada ahi, por default
                                                                                                va a ser week gracias al operador ||

                                                                                            */
    
    const eventsStyleGetter = (event, start, end, isSelected) => { 
                                                                        /*we will pass by props the function to the method eventPropGetter 
    
    
                                                                            */
    
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
        localStorage.setItem('lastView', event); //Guardamos en el local storage la vista a la cual vamos a acceder.
        // setLastView(event)
    }


    
    return(
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
    )
}