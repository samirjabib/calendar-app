import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const loginFormFields = {
    email:'',
    password:'',
}

export const LoginPage = () => {

    const {email, password, onInputChange , onResetForm } = useForm( loginFormFields );

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(email, password);
    }


    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700 z-">
            <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" onSubmit={onSubmit}>
                <label className="font-semibold text-xs" htmlFor='userName '>Username or Email</label>
                <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text"/>
                <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
                <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"type="password"/>
                <button className="flex items-center justify-center h-12 px-6 w-64 bg-cyan-400 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-cyan-500">Login</button>
                <div className="flex mt-6 justify-center text-xs">
                    <Link className="text-blue-400 hover:text-blue-500" >Forgot Password</Link>
                    <span className="mx-2 text-gray-300">/</span>
                    <Link className="text-blue-400 hover:text-blue-500" >Register</Link>
                </div>
            </form>
        </div>
    );
};

