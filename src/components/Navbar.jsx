import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='mx-2' to="/">Inicio</Link>
            <Link className='mx-2' to="/contact">Contacto</Link>
            <Link className='mx-2' to="/product">Canchas</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
