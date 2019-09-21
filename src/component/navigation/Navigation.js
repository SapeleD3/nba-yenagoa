import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './nav.css'

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img src={logo} alt="logo" className='logo' /></Navbar.Brand>
                <Navbar.Brand href="#home" className='text-bold text-center'>BAYELSA CHAPTER</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto text-center">
                        <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
                        <Link to='/'><Nav.Link href="#home">About Us</Nav.Link></Link>
                        <Link to='/'><Nav.Link href="#home">News</Nav.Link></Link>
                        <Link to='/'><Nav.Link href="#home">Membership</Nav.Link></Link>
                        <Link to='/'><Nav.Link href="#home">Publication</Nav.Link></Link>
                    </Nav>
                    <Button variant="outline-success" className="text-center">Contact us - +234*******</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation