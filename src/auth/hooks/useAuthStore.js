import { useDispatch, useSelector } from "react-redux";
import { onLogin ,onLogout,onChecking,clearErrorMessage, onLogoutCalendar} from '../../store' 
import { calendarApi } from '../../api'

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );
        try {
            const { data } = await calendarApi.post('/auth/login',{ email, password }); // GET THE TOKEN AND POST TO LOGIN ROUTER AUTH
            localStorage.setItem('token', data.data.token ); //SET IN LOCALSTORAGE THE TOKEN 
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) ); // SEND TO PAYLOAD THE NEW STATE OF AUTH
            
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
            console.log('user created')

        } catch(error) {
            dispatch( onLogout(error.response.data?.msg || '--') );
            setTimeout( () => {
               dispatch(clearErrorMessage()) 
            }, 10)

        }
    }


    const checkAuthToken = async() => {
       const token = localStorage.getItem('token')
       if(!token) {
        dispatch(onLogout());
        return console.log('no ahi token')
       }
       

       try{
            const { data } = await calendarApi.get('auth/re-validate')
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(onLogin({ name:data.name, uid:data.uid}))
       } catch(error){
            localStorage.clear();
            dispatch( onLogout());
       }
    }


    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogoutCalendar());
        dispatch( onLogout());
    }

    return{
        errorMessage,
        status,
        user,
        startLogout,
        startLogin,
        startRegister,
        checkAuthToken,
    }
}