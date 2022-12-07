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
                await calendarApi.put(`/events/${activeEvent.id}`, calendarEvent);
                dispatch(onUpdateEvent(...calendarEvent, user))
                console.log('event update')
            };

            const { data } = await calendarApi.post('/events', calendarEvent);
            console.log(data);
            dispatch( onAddEvent({...calendarEvent, id: data.event.id, user})) 
        } catch(error) {
            Swal.fire('note has created', '', 'success')
        }
    };

    const startDeletingEvent = async() => {
        try{
            const id = await activeEvent.id
            await calendarApi.delete(`/events/${id}`);
            console.log(activeEvent.id)

            // dispatch( onDeleteEvent());
            console.log('delete event')
        } catch(error){
            console.log(error);
            Swal.fire('error when deleting','', 'error')
        }
    }

    const startLoadingEvents = async() => {
        try{
            const { data } = await calendarApi.get('/events');
            const events = convertEventsToDateEvents(data.events)
            dispatch(onLoadEvents(events))
        }catch(error){
            console.log(error);
            console.log('the events has a error when loading')
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