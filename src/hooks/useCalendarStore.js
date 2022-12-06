import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { onSetActiveEvent, onAddEvent , onUpdateEvent, onDeleteEvent } from "../store";
import Swal from "sweetalert2";



export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events } = useSelector(state  => state.calendar)
    const { user } = useSelector( state => state.auth )

    const setActiveEvents = (calendarEvent) => { 
        dispatch(onSetActiveEvent(calendarEvent)); //return data to reducers with dispatch hook..
    }

    const startAddEvent = async( calendarEvent ) => {
        //TODO: GO TO BACK


        //If the data exist update, if not exists create data. 
        try{    
            if( calendarEvent._id){
                //update event
                await calendarApi.put(`event/${calendarEvent.id}`, calendarEvent);
                dispatch(onUpdateEvent({...calendarEvent}, user));
            } else {
                //create event
                const { data } = await calendarApi.post('/events', calendarEvent);
                dispatch( onAddEvent({...calendarEvent, id: data.event.id, user}));
            }
        }catch(error){
            console.log(error)
            Swal.fire('error when saving', error.response.data.msg , 'error');
        }
     
    }

    const startDeletingEvent = () => { //Send the payload

        //todo llegar al backend
        dispatch( onDeleteEvent())
    }



    return{
        //Propierties
        events,

        //methods
        setActiveEvents, //this method contain the payload of reducer.
        startAddEvent,
        startDeletingEvent,

    }
} 