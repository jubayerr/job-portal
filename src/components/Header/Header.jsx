import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, Container } from 'react-bootstrap'
import './header.css'

const Header = () => {
    return (
        <Navbar bg="success" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">JobHunter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Jobs</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Job Search..." className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;