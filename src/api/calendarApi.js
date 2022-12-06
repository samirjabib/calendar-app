import axios from 'axios';


const calendarApi = axios.create({
    baseURL: "https://calendar-backend-test.up.railway.app/api/v1"
});

calendarApi.interceptors.request.use( config => { //Whill this funcion intercepts the request from the client to the server.
    config.headers = {
        ...config.headers, //we keep a copy of the headers for the maintenance of other headers
        "x-token": localStorage.getItem('token') // save the token in the localstore.
    };
    return config 
})


export default calendarApi;

