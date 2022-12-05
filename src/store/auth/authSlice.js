import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name:'auth',
    initialState:{
        status:'checking', // Miramos si esta autenticado o no.
        user:{},
        errorMessage: undefined,
    },
    reducers:{
        onChecking : (state ) => { 
            state.status = 'checking';  
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, { payload } ) => { 
            state.status = ' authenticated';
            state.user = payload  //Traemos los datos del usuario por el payload. 
            state.errorMessage = undefined;
        },
        onLogout: ( state, { payload }) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload; //Traemos el error del payload. 
        },
        clearErrorMessage: ( state ) => {
            state.errorMessage = undefined;
        }
    }
},)


export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions; //Exportamos nuestras acciones. 