import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logo from './../img/ESTADIO VIRTUAL BCO.png';
import style from './../css/Navbar.module.css';

export const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className={style.container}>
        <Container fluid >
          <Navbar.Brand >
            <img
              src={logo}
              width="90"
              height="50"
              className=""
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle className="bg-transparent border-0" />
          <Navbar.Collapse id="basic-navbar-nav " className={style.Collapse}>
            <Nav className={style.containerLink}>
              <Link className={style.link} to="/">INICIO</Link>
              <Link className={style.link} to="/contact">CONTACTO</Link>
              <Link className={style.link} to="/">CANCHAS</Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar >
    </>
  );
};



