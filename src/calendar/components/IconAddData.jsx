import { useUiStore } from "../../hooks";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { GrAdd } from "react-icons/gr"; 


export const IconAddData = () => {

    const { openDateModal } = useUiStore();
    const { startAddEvent } = useCalendarStore()


    return(
        <>
                <span  className=" bg-green-500 text-white font-[Poppins] hover:scale-105 duration-500 px-9 py-2 mx-4 hover:bg-green-600 rounded  items-center 
                    justify-between flex
                ">
                    <span>Add Event</span>
                </span>

                <button className='bg-red-500 text-white font-[Poppins] duration-500 px-9 py-2  mx-4 hover:bg-red-700 rounded'>
                    Logout
                </button>

        
        </>
        
    )
}