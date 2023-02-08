import { useAuthStore } from "../../auth";
import { useUiStore } from "../../hooks";
import { useCalendarStore } from "../../hooks/useCalendarStore";


export const IconAddData = () => {

    const { openDateModal } = useUiStore();
    const { startLogout } = useAuthStore();
    const { setActiveEvent  } = useCalendarStore()

    const openModal = () => {
        openDateModal();
        setActiveEvent(null)
    }

    return(
        <div className="flex flex-row justify-around">
             
                <button 
                    className='bg-green-500 text-sm shadow text-white rounded-full font-[Poppins] duration-500 px-9 py-[1em]  mx-[1em] hover:bg-green-700  w-42 '
                    onClick={openModal}
                >
                    Add Event
                </button>

                <button 
                    className='bg-red-500 text-sm  rounded-full shadow text-white font-[Poppins] duration-500 px-9 py-[1em]  mx-[1em] hover:bg-red-700  w-42'
                    onClick={startLogout}
                >
                    Logout
                </button>

        
        </div>
        
    )
}