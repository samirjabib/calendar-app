import { Turn as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { ListNavDefault } from './ListNavDefault';
import { IconAddData } from '../../calendar';
import { useAuthStore } from '../../auth';
import { useEffect } from 'react';

const log = 'active'


export const NavBar = () => {
    
    const [ isOpen, setOpen ] = useState(false);

    const { status,  user  } = useAuthStore();

    const { name } = user

    const getListNavbar = () => {
        if( status === 'not-authenticated'){
            return <ListNavDefault/>
        } else {
            return <IconAddData/>
        }
      
    }


    useEffect(() => {
        getListNavbar();
    }, [status, user])




 


    const onToggle = (toogle) => {

        if(toogle){
            setOpen(true)
        } else {
            setOpen(false)
        }
    }


    return(
        <nav className="p-5 bg-white shadow flex justify-between md:flex md:Items-center md:justify-around z-50">
                {/* Logo */}
                <div className='flex justify-between items-center '>
                    <span>
                        <h1 className='text-2xl font-bold uppercase'>{name ? name : 'Calendary'}</h1>
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
                        md:pl-0  md:opacity-100 opacity-0 top-[-400px] 
                        transition-all ease-in duration-500  
                        ${isOpen ? 'top-[80px] opacity-100 text-white bg-gray-200 z-40 shadow-sm' : ' border-top-[1px] border-gray-200top-0 opacity-0 text-black bg-white z-[-1] shadow-none'}
                        
                        `}

                >  
                
                {getListNavbar()}

                </ul>

        </nav>
    )
}