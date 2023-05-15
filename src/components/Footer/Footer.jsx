import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import {} from "./Footer.css"



export const Footer = ()=> {

    return (
        <>

        <footer style={{backgroundColor:"slategray", fontFamily:"Castoro Titling", marginTop: 1}}>
        <Container>
          <Row >
            <div className="col l6 s12">
              <h5 style={{ marginTop:10}}>INFORMACION</h5>
              <p className="grey-text text-lighten-4">Showroom: Luis Garcia 1355, Tigre.</p>
              <p className="grey-text text-lighten-4">HORARIOS: Lun-Viernes de 11 a 18hs</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 style={{ marginTop:10}}>Secciones</h5>
              <ul >
                <li><Link className="footerLinks" to="/productos">Productos</Link></li>
                <li><Link className="footerLinks" to="/productos/muebles">Muebles</Link></li>
                <li><Link className="footerLinks" to="/productos/sillones">Sillones</Link></li>
                <li><Link className="footerLinks" to="/productos/iluminacion">Iluminacion</Link></li>
                
              </ul>
            </div>
          </Row>
          </Container>
        <div class="footer-copyright">
          <div class="container">
          © Copyright 2023 - Desarrollado por Carolina Huergo
          </div>
          </div>
          
        
      </footer>
      </>
    )
}