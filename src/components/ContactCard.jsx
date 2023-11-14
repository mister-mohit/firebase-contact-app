import { AiOutlineUser, AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import AddandUpdate from "./AddandUpdate";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import Disclouse from "./hooks/Disclouse";
import { toast } from "react-toastify";

function ContactCard({contact}) {

    const {isOpen, onClose, onOpen} = Disclouse();

    async function deleteData(id){
        const contactRef = doc(db, "contacts",id);
        await deleteDoc(contactRef);
        toast.success("Contact Deleted Successfully");
    }

    return (
    <>

        <div className="p-2 flex bg-yellow rounded-md min-h-[64px] items-center justify-between">
        
            <div className="flex items-center gap-2 max-w-[250px]">
                <AiOutlineUser className="text-3xl text-orange min-w-[30px]"/>
                <div>
                    <h2 className="font-bold">{contact.name}</h2>
                    <p className="font-medium break-all">{contact.email}</p>
                </div>
            </div>

            <div className="flex text-3xl gap-2" >
                <AiFillEdit onClick={onOpen} className="text-orange"/>
                <AiTwotoneDelete onClick={() => deleteData(contact.id)} className="text-purple" />
            </div>
            
        </div>

        <AddandUpdate isOpen={isOpen} isUpdate onClose={onClose} contact={contact} />

    </>);
}

export default ContactCard;