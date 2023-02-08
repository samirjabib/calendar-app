import { Link } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';
import { useEffect } from "react";

const regitsterFormFields = {
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
}

export const RegisterPage = () => {

    const { onInputChange, name, email, password, confirmPassword } = useForm(regitsterFormFields);
    const { startRegister, errorMessage } = useAuthStore();

    const onSubmit = ( event ) => {
        event.preventDefault()
        console.log('hice submit')
        if( password !== confirmPassword ){
            Swal.fire('Wrong Fields', "Password don't match", 'error')
            return;
        };

        startRegister({ name, email, password })

    }

    useEffect( () => {
        if( errorMessage !== undefined ) {
            Swal.fire('Error in the Auth', errorMessage, 'error');
        }
    }, [errorMessage])


    const goLogin = () => {
        console.log(goRegister)
        navigate('auth/login')
        console.log("me fui")
        
    };


    return(
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700 z-0">
        <form 
            className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
            onSubmit={onSubmit}        
        >
        <label className="font-semibold text-xs" htmlFor="usernameField">Name</label>
            <input 
                className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text"
                onChange={onInputChange}
                name='name'
                value={name}
                />
            <label className="font-semibold text-xs" htmlFor="usernameField">Email</label>
            <input 
                className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text"
                onChange={onInputChange}
                name='email'
                value={email}
                />
            <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
            <input 
                className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"type="password"
                onChange={onInputChange}
                name='password'
                value={password}

            />
            <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Confirm Password</label>
            <input 
                className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"type="password"
                onChange={onInputChange}
                name='confirmPassword'
                value={confirmPassword}
                />
            <button className="flex items-center justify-center h-12 px-6 w-64 bg-cyan-400 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-cyan-500">Register</button>
            <div className="flex mt-6 justify-center text-xs">
                {/* <Link className="text-blue-400 hover:text-blue-500" >Forgot Password</Link>
                <span className="mx-2 text-gray-300">/</span>
                <Link className="text-blue-400 hover:text-blue-500" onClick={goLogin} >Login</Link> */}
            </div>
        </form>
    </div>
    )
}