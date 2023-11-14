import { useEffect, useState } from "react";
import {AiOutlineSearch} from "react-icons/ai";
import {MdAddCircle, MdCollections} from "react-icons/md";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddandUpdate from "./components/AddandUpdate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function onOpen(){
    setIsOpen(true);
  }

  function onClose(){
    setIsOpen(false);
  }

  useEffect(() => {

    async function getContactList(){
      const contactRef = collection(db, "contacts");
      onSnapshot(contactRef, (doc) => {
        const contactList = doc.docs.map((contact) => {
          return {
            id: contact.id,
          ...contact.data()
          }
        })
        setContacts(contactList);
      })
    }

    getContactList();

  }, []);

  
  function handleSearch(event){

    const searchedContact = event.target.value;

    const filteredList = contacts.filter((contact) => 
      contact.name.toLowerCase().includes(searchedContact.toLowerCase())
    );
    setFilteredContacts(filteredList);
  }

  return (
  <div className="max-w-[360px] mx-auto p-2">

    {/*div for the navigation bar */ }
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
        <input onChange={handleSearch} className="h-[40px] rounded-md bg-transparent border-white border-2 pl-7 placeholder-white flex-grow " placeholder="Search contact" />
      </div>
      <MdAddCircle onClick={onOpen} className="text-5xl" />
    </div>

    {/*div for contact cards*/}
    <div className="flex flex-col gap-3 mt-5">
      {(filteredContacts ? filteredContacts : contacts).map((contact) => 
        <ContactCard key={contact.id} contact={contact} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      )}
    </div>

    {/*div for ADD and UPDATE contact Modal */}
    <AddandUpdate  isOpen={isOpen}  onClose={onClose} />

    <ToastContainer position="bottom-center"  />

  </div>
    );
}

export default App;
