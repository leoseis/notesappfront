import React from 'react'
import {Navbar,Nav,Container,Row,NavDropdown} from 'react-bootstrap'
import { FaSquarePlus } from "react-icons/fa6";
import {  Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Nathans Page </Navbar.Brand>
        <Button variant="outline-light">Light</Button>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/add-note"  style={{ textDecoration: "none" }}>
            <button
            className="btn btn-outline-primary btn-md"
            type="button"
           
          >
            <FaSquarePlus className="me-2 fs-6" /> Add Notes
          </button>
          </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
