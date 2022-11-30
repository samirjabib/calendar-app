import { AiOutlineCalendar } from 'react-icons/ai'
import { Turn as Hamburger } from 'hamburger-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';


export const NavBar = () => {

    const navigate = useNavigate();


    const [ isOpen, setOpen ] = useState(false);
    console.log(isOpen);

    const onNavigateLogin = () => {
        navigate('/auth/login')
    }


    const onToggle = (toogle) => {

        if(toogle){
            setOpen(true)
        } else {
            setOpen(false)
        }
    }



    return(
        <nav className="p-5 bg-white shadow flex justify-between md:flex md:Items-center md:justify-between z-50">
                {/* Logo */}
                <div className='flex justify-between items-center '>
                    <span>
                        <h1 className='text-2xl font-bold uppercase'>calendary</h1>
                    </span>

                     
                </div>


                {/* Hamburguer Menu */}
                <span className='md:hidden'>
                    <Hamburger onToggle={onToggle}  />
                </span>
            

                <ul 
                    className={`
                        md:flex md:items-center z-[-1] md:z-auto md:static 
                        absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 
                        md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] 
                        transition-all ease-in duration-500 
                        ${isOpen ? 'top-[80px] opacity-100 text-white bg-black z-40' : ' top-0 opacity-0 text-black bg-white z-[-1]'}
                        
                        `}

                >  

                    <li className="mx-4 my-6 md:my-0">
                        <Link to='/' className="text-xl hover:text-cyan-500 duration-500">
                            Calendar
                        </Link>
                    </li>
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


                </ul>

        </nav>
    )
}