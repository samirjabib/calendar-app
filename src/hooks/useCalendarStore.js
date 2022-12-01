import { useDispatch, useSelector } from "react-redux";
import { onSetActiveEvent, onAddEvent , onUpdateEvent, onDeleteEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events } = useSelector(state  => state.calendar)

    const setActiveEvents = (calendarEvent) => { 
        dispatch(onSetActiveEvent(calendarEvent)); //return data to reducers with dispatch hook..
    }

    const startAddEvent = async( calendarEvent ) => {
        //TODO: GO TO BACK


        //If is right

        if( calendarEvent._id){
            dispatch( onUpdateEvent({...calendarEvent})) //update element return to reducers by means of the payload. 
        }
    }



    return{
        //Propierties
        events,

        //methods
        setActiveEvents, //this method contain the payload of reducer.
        startAddEvent

    }
} 