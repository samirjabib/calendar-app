import { useState } from 'react';
import Modal from 'react-modal'; //https://www.npmjs.com/package/react-modal
import { BsSaveFill} from 'react-icons/bs'

const customStyles = {
    content: {
    //   top: '50%',
    //   left: '50%',
    //   right: 'auto',
    //   bottom: 'auto',
    //   marginRight: '-50%',
    //   transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root'); //this line helps the modal to overlay on top of the other html elements

export const CalendarModal = () => {

    const [isOpen, setOpen] = useState(true)

    const onCloseModal = () => {
        console.log('close modal')
        setOpen(false)
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={ customStyles }
            className="flex items-center justify-center flex-col bg-white w-80 max-h-[45rem] rounded-sm"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }

        >
            <h1 className='text-3xl self-start p-4'>New Events </h1>
            <hr className='border-b-[1px] border-gray-200 w-full '/>
            <form className="container p-4 mb-2">
                <div className="flex flex-col mb-2">
                    <label className='font-medium'>Start date and time</label>
                    <input className="w-full border-b-[1px] border-gray-200" placeholder="Fecha inicio" />
                </div>

                <div className="flex flex-col mb-2">
                    <label className='font-medium'>Finish date and time</label>
                    <input className="w-full border-b-[1px] border-gray-200" placeholder="Fecha inicio" />
                </div>

                <div className="flex flex-col mb-2">
                    <label className='font-medium'>Title and notes</label>
                    <input 
                        type="text" 
                        className="w-full border-b-[1px] border-gray-200"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="text-sm font-medium mt-2">Small descripton</small>
                </div>

                <div className="flex flex-col w-full">
                    <textarea 
                        type="text" 
                        className="border-[1px] border-gray-200 rounded"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Add info</small>
                </div>

                <button
                    type="submit"
                    className="flex flex-row items-center justify-center border-2 px-2 mt-2 rounded"
                >
                    <BsSaveFill size={15} color={'#49d9f1'}/>
                    <span className='font-semibold text-cyan-500'>Save</span>
                </button>

            </form>

        </Modal>
    )
}