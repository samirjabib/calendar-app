import { Link, NavLink } from "react-router-dom"
import {  useNavigate } from 'react-router-dom'


export const ListNavDefault = () => {



    return(
        <>
            <li className="mx-4 my-6 ml-8 md:ml-0 md:my-0 ">
            <Link to='/auth//sign-up' className="text-sm font-semibold hover:text-cyan-500 duration-500 text-black">
                Register
            </Link>
            </li>

            <li className="mx-4 my-6 ml-8 md:ml-0 md:my-0 text-black">
            <NavLink to='/auth/login' className="text-sm font-semibold  hover:text-cyan-500 duration-500">
                Login
            </NavLink>
            </li>
            


        </>
    )
}
