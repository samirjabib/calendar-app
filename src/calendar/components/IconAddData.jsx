import { useUiStore } from "../../hooks";
import { useCalendarStore } from "../../hooks/useCalendarStore";


export const IconAddData = () => {

    const { openDateModal } = useUiStore();


    const openModal = () => {
        openDateModal();
    }

    return(
        <>
                <span  className=" bg-green-500 text-white font-[Poppins] hover:scale-105 duration-500 px-9 py-2 mx-4 hover:bg-green-600 rounded  items-center 
                    justify-between flex
                     "
                     onClick={openModal}
                >
                    <span>Add Event</span>
                </span>

                <button className='bg-red-500 text-white font-[Poppins] duration-500 px-9 py-2  mx-4 hover:bg-red-700 rounded'>
                    Logout
                </button>

        
        </>
        
    )
}