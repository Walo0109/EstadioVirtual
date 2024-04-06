import style from './../css/Footer.module.css';

export const Footer = () => {
    const handleLoginClick = () => {
        alert('Botón de inicio de sesión presionado');
    };

    const handleCreateAccountClick = () => {
        alert('Botón de creación de cuenta presionado');
    };

    return (
        <>
            <footer className={style.Footer}>
                <p>ESTADIO VIRTUAL</p>
                <p>2021</p>
                <p>© 2021 ESTADIO VIRTUAL. All Rights Reserved.</p>
                <div className={style.links}>
                    <button onClick={handleLoginClick}>Iniciar sesión</button>
                    <button onClick={handleCreateAccountClick}>Crear cuenta</button>
                </div>
            </footer>
        </>
    );
}
