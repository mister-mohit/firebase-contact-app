
import Modal from './Modal';
import { AiOutlineClose } from "react-icons/ai";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import React from 'react';

function AddandUpdate({ isOpen, onClose, contact, isUpdate}) {


    const contactValidationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required")
    })

    async function updateData(values, id){
        const contactRef = doc(db, "contacts", id);
        await updateDoc(contactRef, values);
        toast.success("Contact Updated Successfully!")
        onClose();
    }

    async function addData(values){
        const contactRef = collection(db, "contacts");
        await addDoc(contactRef, values);
        toast.success("Contact Added Successfully");
        onClose();
    }

    return (
        isOpen && <Modal>
            <div className='mx-auto mt-[15%] max-w-[250px] max-h-[250px] p-2 bg-white rounded-md flex flex-col border-b-4 border-orange'>
                <AiOutlineClose onClick={onClose} className='self-end text-xl' />
                <Formik
                    validationSchema={contactValidationSchema}

                    initialValues={isUpdate ?
                        {
                            name: contact.name,
                            email: contact.email
                        } :
                        {
                            name: "",
                            email: ""
                        }
                    }
                    onSubmit={isUpdate ?(values) =>  updateData(values, contact.id) : (values) => addData(values)}
                >
                    <Form className="flex flex-col gap-2">
                        <div className="flex flex-col ">
                            <label htmlFor='name'>Name</label>
                            <Field name="name" className=" p-1 rounded-sm border-black border" />
                            <div className='text-red text-xs'><ErrorMessage name="name" /></div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor='email'>Email</label>
                            <Field name="email" className=" p-1 rounded-sm border-black border" />
                            <div className='text-red text-xs'><ErrorMessage name="email" /></div>
                        </div>
                        <button type="submit" className='text-sm font-md bg-orange rounded-sm text-white px-2 py-1 self-end mt-2 mb-2'>{isUpdate ? "Update" : "Add"} Contact</button>
                    </Form>
                </Formik>

            </div>            
        </Modal> 
    );
}

export default AddandUpdate;