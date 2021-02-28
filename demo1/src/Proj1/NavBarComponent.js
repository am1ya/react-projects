
import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './library.jpg';

class NavBarComponent extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                        Nalanda Library
                </Navbar.Brand>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home <span class="sr-only">(current)</span></Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link class="disabled" href="#disabled">Disabled</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Form inline>
                            <FormControl className="mr-sm-2" type="text" placeholder="Search" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Nav>
                </div>
            </Navbar>

        );
    }
}

export default NavBarComponent