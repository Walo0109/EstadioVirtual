import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../img/ESTADIOVIRTUALNEGRO.png';

export const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" style={{backgroundColor: '#4CAF50'}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="80"
              height="40"
              className="d-inline-block align-top"
              alt="Estadio Virtual logo"
            />
          </Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ justifyContent: 'flex-end' }}>
  <Button variant="link" href="#home">Home</Button>
  <Button variant="link" href="#contact">Contacto</Button>
  <Button 
    variant="link" 
    href="#login" 
    style={{
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.15)', 
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.backgroundColor = '#4CAF50';
      e.currentTarget.style.color = 'white';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.backgroundColor = '';
      e.currentTarget.style.color = '';
    }}
  >
    LOGIN
  </Button>
</Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;