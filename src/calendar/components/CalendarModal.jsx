import { useMemo, useState } from 'react';
import Modal from 'react-modal'; //https://www.npmjs.com/package/react-modal
import { BsSaveFill} from 'react-icons/bs'
import { addHours } from 'date-fns/esm';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'


import DatePicker from "react-datepicker"; //https://www.npmjs.com/package/react-datepicker
import "react-datepicker/dist/react-datepicker.css"; //styles for date
import { differenceInSeconds } from 'date-fns';

// const customStyles = {
//     content: {
//     //   top: '50%',
//     //   left: '50%',
//     //   right: 'auto',
//     //   bottom: 'auto',
//     //   marginRight: '-50%',
//     //   transform: 'translate(-50%, -50%)',
//     },
//   };

  Modal.setAppElement('#root'); //this line helps the modal to overlay on top of the other html elements

export const CalendarModal = () => {

    const [isOpen, setOpen] = useState(true)
    const [ formSubmitted, setFormSubmitted ] = useState(true)

    const [ formValues, setFormValues ] = useState({ 
        title:'',
        notes:'',
        start: new Date(),
        end: addHours( new Date(), 2),
    });

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name] : target.value
        });
    }

    const titleClass = useMemo( () => {
        if(!formSubmitted) return '';
        console.log('samir')

        return( formValues.title.length > 0)
            ? ''
            : 'border-red-500 rounded border-[1px]'
    },[ formValues.title, formSubmitted ])

    const onDateChanged = ( event, changing) =>{ /*
                                                    will us create a new fuction for date , because propierty target dont exist in the datepick 
                                                    components
                                                 */
        setFormValues({
            ...formValues,
            [changing]: event 
        })
    }

    const onCloseModal = () => {
        console.log('close modal')
        setOpen(false)
    }

    const onSubmit = ( event )=> {
         event.preventDefault();

        const difference = differenceInSeconds( formValues.end, formValues.start );
        if( isNaN( difference)||difference <=0 ) { 
            Swal.fire('Wrong dates', 'Check the date', 'error')
            return
        }  

         if(formValues.title.length <= 0) return;

         console.log(formValues);
        setFormSubmitted(false)
    
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            // style={ customStyles }
            className="flex items-center justify-center flex-col bg-white w-80 max-h-[45rem] rounded-sm"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }

        >
            <h1 className='text-3xl self-start p-4'>New Events </h1>
            <hr className='border-b-[1px] border-gray-200 w-full '/>
            <form className="container p-4 mb-2" onSubmit={ onSubmit }>
                <div className="flex flex-col mb-2">
                    <label className='font-medium'>Start date and time</label>
                    <DatePicker
                        selected={formValues.start}
                        className="w-full border-b-[1px] border-gray-200" 
                        onChange={(event) => onDateChanged(event, 'start')}
                        dateFormat="Pp"
                        showTimeSelect
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <label className='font-medium'>Finish date and time</label>
                    <DatePicker
                        minDate={ formValues.start }
                        selected={formValues.end}
                        className="w-full border-b-[1px] border-gray-200" 
                        onChange={ (event) => onDateChanged(event, 'end') }
                        dateFormat="Pp"
                        showTimeSelect
                        
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <label className='font-medium'>Title and notes</label>
                    <input 
                        type="text" 
                        className={`w-full border-b-[1px] border-gray-200 ${titleClass} `}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        onChange={ onInputChange }
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
                        onChange={ onInputChange }
                    ></textarea>
                    <small id="emailHelp" className="text-sm mt-2 text-gray-400">Add info</small>
                </div>

                <button
                    type="submit"
                    className="flex flex-row items-center justify-center border-2 px-2 mt-2 rounded
                    text-cyan-400 hover:text-cyan-500 border-[#49d9f1] hover:bg-black/10
                    "
                >
                    <BsSaveFill size={15} color={'#49d9f1'}/>
                    <span className='font-semibold '>Save</span>
                </button>

            </form>

        </Modal>
    )
}