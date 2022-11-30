import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns' //these  libraries help us to managent the date


const eventTemp = [{ //Make the events for the calendar
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

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            eventTemp
        ],
        activeEvent: null
    },
    reducers: {

    }
});


// Action creators are generated for each case reducer function
export const { } = calendarSlice.actions;