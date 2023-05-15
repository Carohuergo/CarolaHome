import { Container, Nav, NavDropdown, NavLink, Navbar, Row } from "react-bootstrap";
import CardWidget from "../CardWidget/CardWidget"
import logo from './ch (1).png'
import "./NavBar.css"
import { Link } from "react-router-dom";



const NavBar = () => {
    return (



        <nav className="navBarStyle" >

            <div>
                <Link to="/productos" className="ButtonStyle" >
                    Productos
                </Link>
                <Link to="/productos/sillones" className="ButtonStyle">
                    Sillones
                </Link>
                <Link to="/">
                    <img src={logo} alt="logo" className="logoStyle" />
                </Link>

                <Link to="/productos/muebles" className="ButtonStyle">
                    Muebles
                </Link>
                <Link to="/productos/iluminacion" className="ButtonStyle">
                    Iluminacion
                </Link>
                <Link className="ButtonStyle" style={{ marginLeft: 19, border: 10 }}>
                    <CardWidget />
                </Link>

            </div>

        </nav>


        //    <Container className="navBarStyle">
        //    <Row>
        //    <Navbar  expand="md" >
        //      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //      <Navbar.Collapse id="basic-navbar-nav">
        //        <Nav className="me-auto">
        //        <Nav.Link href="#home" className="ButtonSyle">Nosotras</Nav.Link>
        //          <Nav.Link href="#home" className="ButtonSyle">Sillones</Nav.Link>
        //          <Navbar.Brand href="#home">
        //          <img src={logo} alt="logo" style={{height:100, width:100}}/>
        //          </Navbar.Brand>
        //          <Nav.Link href="#link"className="ButtonSyle">Accesorios</Nav.Link>
        //          <NavDropdown title="Muebles" id="basic-nav-dropdown" className="ButtonSyle">
        //            <NavDropdown.Item href="#action/3.1">Escritorios</NavDropdown.Item>
        //            <NavDropdown.Item href="#action/3.2"> Mesas</NavDropdown.Item>
        //            <NavDropdown.Item href="#action/3.3">Sillas</NavDropdown.Item>
        //          </NavDropdown>
        //        </Nav>
        //      </Navbar.Collapse>
        //      <CardWidget />
        //      </Navbar>

        //      </Row>
        //      </Container>
        // //

    );


}

export default NavBar