import { parseISO } from "date-fns";


export const convertEventsToDateEvents = (events = []) => { //Recaive the events for props

    return events.map( event => {
        //Convert date string to date javascript for use in the calendar.
        event.end = parseISO(event.end);
        event.start = parseISO( event.start);

        return event; //return the event modified to events.
    })

} 