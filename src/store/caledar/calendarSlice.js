import { createSlice } from '@reduxjs/toolkit';



export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            
        ],
        activeEvent: null
    },
    reducers: {

    }
});


// Action creators are generated for each case reducer function
export const { } = calendarSlice.actions;