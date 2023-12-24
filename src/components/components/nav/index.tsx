/** @format */

import "../../style/style.css";
import logo from "../../images/logo1.png";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Image
} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar key={"lg"} expand={"lg"} className='navbar'>
      <Container fluid>
        <Navbar.Brand href='#'>
          <div className='navbar-head'>
            <h1 className='navbar-title'>
              <Image className='logo-image' src={logo} alt='Logo' />
              <span className='navbar-title'>Doggie Training Hub</span>
            </h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${"lg"}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
          placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
              <h1 className='navbar-mobile-title'>
                <Image className='logo-image' src={logo} alt='Logo' />
                Doggie Training Hub
              </h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/'>About</Nav.Link>
              <Nav.Link href='/'>Course</Nav.Link>
              <Nav.Link href='/'>Competition</Nav.Link>
              <Nav.Link href='/'>Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
