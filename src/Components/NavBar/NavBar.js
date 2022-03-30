import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import SignUpForm from "../SignUpForm/SignUpForm"
import { Link } from "react-router-dom"
 
const NavBar = () =>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Community Garden</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <SignUpForm/>
               <Nav.Link href="#home"><Link className="nav-bar-link" to='/home'>Home</Link></Nav.Link> 
                <Nav.Link href="#about"><Link className="nav-bar-link" to='/about'>About</Link></Nav.Link>
                <Nav.Link href="#the-garden">The Garden</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">About Community Gardens</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar