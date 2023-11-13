import { useEffect, useState } from "react";
import {AiOutlineSearch} from "react-icons/ai";
import {MdAddCircle, MdCollections} from "react-icons/md";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";

function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    async function getContactList(){
      try {
        const contactRef = collection(db, "contacts");
        onSnapshot(contactRef, (doc) => {
          const contactList = doc.docs.map((contact) => {
            return {
              id: contact.id,
              ...contact.data()
            }
          }) 

          setContacts(contactList);
    
        });
      } catch (error) {
        console.log(error);
      }
    }

    getContactList();

  }, []);

  return (
  <div className="max-w-[360px] mx-auto p-2">

    {/*Div for the navigation bar */ }
    <div className="flex bg-white rounded-md h-[60px] justify-center items-center gap-2 ">
      <div>
        <img src="logos_firebase.png" alt="logo" />
      </div>
      <h1 className="text-2xl font-bold ">Firebase Contact App</h1>
    </div>

    {/*div for the search bar */}
    <div className="mt-4 flex ">
      <div className="relative flex flex-grow items-center text-white">
        <AiOutlineSearch className="text-2xl absolute top-[28%] left-1"/>
        <input className="h-[40px] rounded-md bg-transparent border-white border-2 pl-7 placeholder-white flex-grow " placeholder="Search contact" />
      </div>
      <MdAddCircle className="text-5xl" />
    </div>

    {/*div for contact cards*/}
    <div className="flex flex-col gap-3 mt-5">
      {contacts.map((contact) => 
        <ContactCard key={contact.id} contact={contact} />
      )}
    </div>

  </div>
    );
}

export default App;
