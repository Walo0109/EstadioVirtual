// import style from './../css/Footer.module.css';
// import { Modal } from './ModalLogin';
// import { useState } from 'react';

// export const Footer = () => {

//     return (
//         <>
//             <footer className={style.Footer}>
//                 <p>ESTADIO VIRTUAL</p>
//                 <p>2021</p>
//                 <p>© 2021 ESTADIO VIRTUAL. All Rights Reserved.</p>
//                 <div className={style.links}>
//                     <button onClick={ }>Iniciar sesión</button>
//                     {/* <button onClick={}>Crear cuenta</button> */}
//                 </div>
//             </footer>

//         </>

//     );
// }

// export const App = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     return (
//         <div className="App">
//             <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
//             <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
//         </div>
//     );
// }

import style from './../css/Footer.module.css';
import { useState } from 'react';
import { Modal } from './ModalLogin';

export const Footer = ({ openModal }) => {
    return (
        <>
            <footer className={style.Footer}>
                <p>ESTADIO VIRTUAL</p>
                <p>2021</p>
                <p>© 2021 ESTADIO VIRTUAL. All Rights Reserved.</p>
                <div className={style.links}>
                    <button onClick={openModal}>Iniciar sesión</button>
                    {/* <button onClick={openModal}>Crear cuenta</button> */}
                </div>
            </footer>
        </>
    );
}

export const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    return (
        <div className="App">
            <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
            <Footer openModal={openModal} />
        </div>
    );
}
