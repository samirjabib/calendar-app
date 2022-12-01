import { Link } from "react-router-dom"
import {  useNavigate } from 'react-router-dom'


export const ListNavDefault = () => {


    const navigate = useNavigate();



    const onNavigateLogin = () => {
        navigate('/auth/login')
    }
    
    return(
        <>
            <li className="mx-4 my-6 md:my-0">
            <Link to='/auth/register' className="text-xl hover:text-cyan-500 duration-500">
                Register
            </Link>
            </li>

            <button 
            className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded  "
            onClick={onNavigateLogin}
            >
            Login
            </button>
            

        
        </>
    )
}
