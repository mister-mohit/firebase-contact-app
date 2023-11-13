import { AiOutlineUser, AiFillEdit, AiTwotoneDelete } from "react-icons/ai";

function ContactCard({contact}) {
    return (

        <div className="p-2 flex bg-yellow rounded-md min-h-[64px] items-center justify-between">
        
            <div className="flex items-center gap-2 max-w-[250px]">
                <AiOutlineUser className="text-3xl text-orange"/>
                <div>
                    <h2 className="font-bold">{contact.name}</h2>
                    <p className="font-medium break-all">{contact.email}</p>
                </div>
            </div>

            <div className="flex text-3xl gap-2" >
                <AiFillEdit className="text-orange"/>
                <AiTwotoneDelete className="text-purple" />
            </div>

        </div>


    );
}

export default ContactCard;