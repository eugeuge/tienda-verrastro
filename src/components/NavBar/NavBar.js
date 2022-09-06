import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget.js';
import logo from '../../assets/logo.png';
import {LinkContainer} from 'react-router-bootstrap';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <LinkContainer to="/"><Navbar.Brand href="#home"><img src={logo} alt="halurä"/></Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/productos"><Nav.Link href="#home">Productos</Nav.Link></LinkContainer>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <LinkContainer to='/categoria/nature'><NavDropdown.Item href="#action/3.1">Nature</NavDropdown.Item></LinkContainer>
            <LinkContainer to='/categoria/arty'><NavDropdown.Item href="#action/3.2">Arty</NavDropdown.Item></LinkContainer>
            <LinkContainer to='/categoria/documental'><NavDropdown.Item href="#action/3.3">Documental</NavDropdown.Item></LinkContainer>
              
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
   </Container>
    </Navbar>
  );
}

export default NavBar;