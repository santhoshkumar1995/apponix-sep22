import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

interface IMyNavbar{}
export const MyNavbar:React.FC<IMyNavbar>=(props)=>{
    return <>
     <Navbar  bg="dark" variant="dark" >
      
      <Container>
        <Navbar.Brand href="#home">Santhosh creation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link ><Link to='/Home'> Home</Link></Nav.Link>
            <Nav.Link > <Link to='/About'> about</Link></Nav.Link>
            <Nav.Link > <Link to='/Contact'> Contact</Link></Nav.Link>
            <Nav.Link > <Link to='/Jewellery1'>Jewellery1</Link></Nav.Link>
            <Nav.Link > <Link to='/Flipcart'>flipcart</Link></Nav.Link>
        
            
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
}