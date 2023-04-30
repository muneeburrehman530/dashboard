import React, { useState } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import RegisterModal from "./RegisterModal";

const NavbarDashboard = ({ logout }) => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <RegisterModal />
          </Nav>
          <Button onClick={logout}>logout</Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarDashboard;
