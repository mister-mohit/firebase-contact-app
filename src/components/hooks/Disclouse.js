import { useState } from "react";


const Disclouse = () => {

    const [isOpen, setIsOpen] = useState(false);

    function onOpen(){
      setIsOpen(true);
    }
  
    function onClose(){
      setIsOpen(false);
    }

  return (
    {isOpen, onClose, onOpen}
  )
}

export default Disclouse;