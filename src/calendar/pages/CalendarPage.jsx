import { Calendar } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns' //these  libraries help us to managent the date

import { localizer } from "../../helpers";


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

const eventsStyleGetter = (event, start, end, isSelected) => { 
                                                                    /*we will pass by props the function to the method eventPropGetter 


                                                                        */
    console.log({ event,start, end, isSelected})
    const style = {
        backgroundColor:'#22d3ee',
        borderRadius:'0px',
        opacity:0.8
        
    }
}

export const CalendarPage = () => {
    return(
        <div className="p-4">
            <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            eventPropGetter={ eventsStyleGetter }
            />
        </div>
    )
}