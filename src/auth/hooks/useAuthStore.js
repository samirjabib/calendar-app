import { useDispatch, useSelector } from "react-redux";
import { onLogin ,onLogout,onChecking,clearErrorMessage } from '../../store' 
import { calendarApi } from '../../api'

import axios from "axios";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );

    const dispatch = useDispatch();


    // const startLogin = async({ email, password }) => {
    //     dispatch(onChecking());
    //     try{
    //         const { data } = await calendarApi.post('/auth', { email, password });
    //         console.log(data);
    //         dispatch(onLogin({name: data.name, uid: data.uid }))

    //     } catch(error) {
    //         console.log(error);
    //     }
    // }
    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );
        try {
            const { data } = await calendarApi.post('/auth/login',{ email, password }); // GET THE TOKEN AND POST TO LOGIN ROUTER AUTH
            localStorage.setItem('token', data.data.token ); //SET IN LOCALSTORAGE THE TOKEN 
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) ); // SEND TO PAYLOAD THE NEW STATE OF AUTH
            console.log(data.data.token)
            
        } catch (error) {
            dispatch( onLogout('Incorrect Password') ); //Enviamos el error al payload de nuestro reducer. 
            setTimeout(() => {
                dispatch( clearErrorMessage() ); //Limpiamos el state de errores despues de 10 ms
            }, 10);
        }
    }

    const startRegister = async({email, password, name}) => {
        dispatch(onChecking());

        try{
            const { data } = await calendarApi.post('/auth/register', { email, password, name});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({name: data.name, uid: data.uid}))


        } catch(error) {
            dispatch( onLogout(error.response.data?.msg || '--') );
            setTimeout( () => {
               dispatch(clearErrorMessage()) 
            }, 10)

        }
    }


    const checkAuthToken = async() => {
        const token = localStorage.getItem('token')
        if(!token) return dispatch( onLogout());

        try{
            const { data } = await calendarApi.get('auth/re-validate');
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( onLogin({name: data.data.name, uid:data.data.uid}))
        } catch(error){
            console.log(error)
        }
    }

    return{
        startLogin,
        startRegister,
        checkAuthToken,
    }
}