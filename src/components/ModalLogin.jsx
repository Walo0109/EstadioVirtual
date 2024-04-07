// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// export const ModalLogin = () => {
//     const [show, setShow] = useState(false);

//     const handleLoginClick = () => setShow(false);
//     const handleCreateAccountClick = () => setShow(true);

//     return (
//         <>
//             <Button variant="primary" onClick={handleLoginClick}>
//                 Launch demo modal
//             </Button>

//             <Modal show={show} onHide={handleLoginClick}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Modal heading</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleLoginClick}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleLoginClick}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './../css/Modal.css';

ReactModal.setAppElement('#root');

export const Modal = ({ isOpen, closeModal }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="My Dialog"
        >
            <button onClick={closeModal}>Cerrar</button>
            <div>Mi contenido de modal</div>
        </ReactModal>
    );
}

export const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    return (
        <div className="App">
            <button onClick={openModal}>Iniciar sesión</button>
            <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
        </div>
    );
}