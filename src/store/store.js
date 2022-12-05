import { configureStore } from "@reduxjs/toolkit"

import { calendarSlice, uiSlice, authSlice} from "./"




export const store = configureStore({ //Importamos nuesros reducers de los Slice
    reducer: {
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer,
        auth: authSlice.reducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({ //For default error 
        serializableCheck:false
    })
})