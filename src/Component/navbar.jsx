// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import cartimage from '../Image/cartimage.jpg';


function NavBar(props) {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <NavDropdown title="Shop" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/1">All Products</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/2">Popular Items</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3">New Arrivals</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Button variant="outline-dark" size="lg"> 🛒  Cart <span className="badge bg-dark ms-1 rounded-circle">{props.cartValue}</span></Button>
                                
                            </Col>
                        </Row>
                    </Form>
                </Container>

            </Navbar>
        </>

    );
}
export default NavBar;