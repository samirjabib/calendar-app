import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => { /*Make a custom Hook for managent the uiSlicer */

    const dispatch = useDispatch(); //Use dispatch for methods of slice

    const { isDateModalOpen } = useSelector( state => state.ui); //Use selector for select state of store

    const openDateModal = () => { //Make a funcion with dispatch.
        dispatch( onOpenDateModal() )
    }

    const closeDateModal = () => { //Make a funcion with dispatch.
        dispatch( onCloseDateModal() )
    }


    return {
        //Propierties
        isDateModalOpen,

        //Method
        openDateModal,
        closeDateModal,
    }

}