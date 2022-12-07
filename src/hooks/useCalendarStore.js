import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { onSetActiveEvent, onAddEvent , onUpdateEvent, onDeleteEvent, onLoadEvents } from "../store";
import Swal from "sweetalert2";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";



export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state  => state.calendar)
    const { user } = useSelector( state => state.auth )

    const setActiveEvent = (calendarEvent) => { 
        dispatch(onSetActiveEvent(calendarEvent)); //return data to reducers with dispatch hook..
    }

    const startAddEvent = async( calendarEvent ) => {
        try{
            if(calendarEvent.id){
                console.log('this event exists')
                return
            };

            const { data } = await calendarApi.post('/events', calendarEvent);
            console.log(data);
            dispatch( onAddEvent({...calendarEvent, id: data.event.id, user})) 
        } catch(error) {
            console.log(error)
        }
    };

    const startDeletingEvent = async() => {
        try{
            await calendarApi.delete(`/events/${activeEvent.id}`);
            dispatch( onDeleteEvent());
        } catch(error){
            console.log(error);
            Swal.fire('error when deleting ')
        }
    }

    const startLoadingEvents = async() => {
        try{
            const { data } = await calendarApi.get('/events');
            const events = convertEventsToDateEvents(data.events)
            console.log(events)
        }catch(error){

        }
    }


    
    return{
        //Propierties
        events,
        activeEvent,

        //methods
        setActiveEvent, //this method contain the payload of reducer.
        startAddEvent,
        startDeletingEvent,
        startLoadingEvents

    }
} 