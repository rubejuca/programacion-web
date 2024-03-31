// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// eslint-disable-next-line react/prop-types
export const Headers = ({ flag, setFlag }) => {
  const changeFlag = () => setFlag(!flag);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CONTACTS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={changeFlag}>List Contacts</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="dark" onClick={changeFlag}>
              Add new contact
            </Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
