import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { onSetActiveEvent, onAddEvent , onUpdateEvent, onDeleteEvent } from "../store";
import Swal from "sweetalert2";
import { calendarApi } from "../api";



export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state  => state.calendar)
    const { user } = useSelector( state => state.auth )
    console.log(activeEvent)

    const setActiveEvent = (calendarEvent) => { 
        dispatch(onSetActiveEvent(calendarEvent)); //return data to reducers with dispatch hook..
    }

    const startAddEvent = async( calendarEvent ) => {
        //TODO: GO TO BACK
        console.log(calendarEvent)

    }


    
    return{
        //Propierties
        events,
        activeEvent,

        //methods
        setActiveEvent, //this method contain the payload of reducer.
        startAddEvent,

    }
} 