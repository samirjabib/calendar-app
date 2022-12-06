import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables()




const calendarApi = axios.create({
    baseURL: "https://calendar-backend-test.up.railway.app/api/v1"
});

// Todo: configurar interceptores
// calendarApi.interceptors.request.use( config => { //Usamos los interceptores de axios.

//     config.headers = {
//         ...config.headers, //Devolvemos una copia de los headers por si existen algun otro, que no se pierda
//         'x-token': localStorage.getItem('token') //Seteamos el token dentro de nuestro storage.
//     }

//     return config; //Retornamos la configuracion. 
// })


export default calendarApi;

