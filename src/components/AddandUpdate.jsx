import React from 'react'
import Modal from './Modal';
import { AiOutlineClose } from "react-icons/ai";
import { Field, Form, Formik } from "formik";

function AddandUpdate({isOpen,onClose}) {
    return (
        isOpen && <Modal>
            <div className='mx-auto mt-[15%] max-w-[250px] max-h-[250px] p-2 bg-white rounded-md flex flex-col border-b-4 border-orange'>
                <AiOutlineClose onClick={onClose} className='self-end text-xl' />
                <Formik>
                    <Form className="flex flex-col gap-2">
                        <div className="flex flex-col ">
                            <label htmlFor='name'>Name</label>
                            <Field name="name" className=" p-1 rounded-sm border-black border" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor='email'>Email</label>
                            <Field name="email" className=" p-1 rounded-sm border-black border" />
                        </div>
                        <button type="submit" className='text-sm font-md bg-orange rounded-sm text-white px-2 py-1 self-end mt-2 mb-2'>Add Contact</button>
                    </Form>
                </Formik>

            </div>            
        </Modal> 
    );
}

export default AddandUpdate;