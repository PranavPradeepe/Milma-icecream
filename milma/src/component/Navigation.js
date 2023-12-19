import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../component/images/logo.png'


function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary"  >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="/admin">Admin</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;