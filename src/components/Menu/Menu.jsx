import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tienda-Verrastro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#link">Formas de envío</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cursos</NavDropdown.Item>
 {/*             <NavDropdown.Item href="#action/3.2">
                Conocer cursos
  </NavDropdown.Item> */}
              <NavDropdown.Item href="#action/3.3">Materiales</NavDropdown.Item>
              <NavDropdown.Divider />
   {/*             <NavDropdown.Item href="#action/3.4">
                Nuestros Materiales
              </NavDropdown.Item>*/}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;