import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { useAuthStore } from "../hooks/useAuthStore";

const loginFormFields = {
    email:'',
    password:'',
    
}

export const LoginPage = () => {

    const {email, password, onInputChange , onResetForm } = useForm( loginFormFields );
    const {  startLogin, errorMessage } = useAuthStore();

    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        // startLogin({ email, password });
        startLogin({ email, password}) //send the data to payload.
        onResetForm(); //reset form after peticion. 
    }

    

    useEffect( () => {
        if( errorMessage !== undefined ) {//this funciton is activated when the errorMessage state change. 
            Swal.fire('Error in the Auth', errorMessage, 'error'); //use swal for the alert.
        }
    }, [errorMessage])

    const goRegister = () => {
        console.log(goRegister)
        navigate('/auth/register')
        console.log("me fui")
        
    };


    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700 z-">
            <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" onSubmit={onSubmit}>
                <label className="font-semibold text-xs" htmlFor='userName '>Username or Email</label>
                <input 
                    className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text"
                    value={email}
                    name="email"
                    onChange={onInputChange}
                    />
                <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
                <input 
                    className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"type="password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    />
                <button className="flex items-center justify-center h-12 px-6 w-64 bg-cyan-400 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-cyan-500">Login</button>
                <div className="flex mt-6 justify-center text-xs">
                    <Link className="text-blue-400 hover:text-blue-500" >Forgot Password</Link>
                    <span className="mx-2 text-gray-300">/</span>
                    <Link className="text-blue-400 hover:text-blue-500" onClick={goRegister}>Login</Link>
                </div>
            </form>
        </div>
    );
};

