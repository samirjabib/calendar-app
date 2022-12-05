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
    const startLogin = async ({email, password}) => {
        dispatch(onChecking());
        try{
            const { data } = await calendarApi.post('/auth/login', { email, password});
            console.log(data)
        } catch(error){
            console.log(error)
        }
    }

    return{
        startLogin
    }
}