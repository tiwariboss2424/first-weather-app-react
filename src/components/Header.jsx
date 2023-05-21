import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Toast from 'react-bootstrap/Toast';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import { Navbar, Container } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="mt-auto">
            <div className="p-2" style={{ fontSize: "2rem" }}>
              Weather App 🎉
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
