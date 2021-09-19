import React from 'react'
import { Navbar , Container , Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import * as Icon from 'react-bootstrap-icons';

function Header()
{
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav'>
        <Container>
            <Navbar.Brand href="#">
                    <Icon.CardList className='icon' />
                    {' '}Users List
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#cards" >Users List</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#edit" >Edit users</Nav.Link>
                <Nav.Link eventKey={2} href="#about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
export default Header