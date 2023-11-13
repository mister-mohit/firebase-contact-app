import {createPortal} from "react-dom";

function Modal({children}) {
    return createPortal(
        <div className="absolute top-0 backdrop-blur w-screen h-screen">
            <div >
                {children}
            </div>
        </div>
    , document.getElementById("modal-root"));
}

export default Modal;