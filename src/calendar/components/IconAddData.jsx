import { useAuthStore } from "../../auth";
import { useUiStore } from "../../hooks";
import { useCalendarStore } from "../../hooks/useCalendarStore";


export const IconAddData = () => {

    const { openDateModal } = useUiStore();
    const { startLogout } = useAuthStore();


    const openModal = () => {
        openDateModal();
    }

    return(
        <div className="flex flex-row justify-around">
             
                <button 
                    className='bg-green-500 text-sm shadow text-white font-[Poppins] duration-500 px-9 py-[1em]  mx-[1em] hover:bg-green-700 rounded w-42 '
                    onClick={openModal}
                >
                    Add Events
                </button>

                <button 
                    className='bg-red-500 text-sm shadow text-white font-[Poppins] duration-500 px-9 py-[1em]  mx-[1em] hover:bg-red-700 rounded w-42'
                    onClick={startLogout}
                >
                    Logout
                </button>

        
        </div>
        
    )
}