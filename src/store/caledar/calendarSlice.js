import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns' //these  libraries help us to managent the date



const tempEvent =   {
    _id: new Date().getTime(),
    title: 'Cumpleaños del Jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Samir'
    }
};


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents:true,
        events: [
            tempEvent
        ],
        activeEvent: null
    },
    reducers: {
            //note : XD the initial state is the state fool
        onSetActiveEvent: ( state, { payload } ) => { //Desectructured payload from the object action this, function is a reducer with auto action. , 
            state.activeEvent = payload  //assing the payload to state.activeEvent
        }, 

        onAddEvent: (state, {payload}) => { //Function to add a data to payload.
            state.events.push(payload) // use the push method, this method add one or more elements to the final of arrays
            state.active = null; // reset active when form used function onsubmit. 
        },

        onUpdateEvent: ( state,   {payload }) => {
            state.events = state.events.map( event => { //list the data for update.
                if(event._id === payload._id){ //select data from ui
                    return payload //return data selected from ui for update the state events in this case.
                }

                return event //return the data update. 
            })
        },

        onDeleteEvent: ( state ,{ payload } ) => {
            if( state.activeEvent) { //if status is active
                state.events = state.events.filter( event => event._id === payload._id) //filter the data by operation of equals id, the id from store data, and the payload.
                state.activeEvent = null; // off data.
            }
        },
        onLoadEvents : ( state, {payload = {}}) => {
            state.isLoadingEvents = false;

            payload.forEach( event => {
                const exists = state.events.some( dbEvent => dbEvent.id === event.id);
                if(!exists){
                    state.events.push(event);
                }
            })
        },

        onLogoutCalendar: ( state ) => {
            state.isLoadingEvents = true,
            state.events = [],
            state.activeEvent = null
        },
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddEvent, onDeleteEvent, onUpdateEvent, onLoadEvents } = calendarSlice.actions;