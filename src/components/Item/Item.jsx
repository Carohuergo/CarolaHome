import {  Card, Container, Row } from "react-bootstrap";
import "./Item.css"
import { Link } from "react-router-dom";

export const Item = ({id, name, img, precio, category}) => {


    return (
        <div>
        <Card style={{ width: '18rem', margin: 40, fontFamily: 'Castoro Titling' }} className="text-center">
        <Card.Img variant="top" src={img} style={{ objectFit:"contain"}}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Container>
            <Row>
              <p> Precio: ${precio}</p>
              <p> Categoria: {category}</p>
            </Row>
          </Container>
          <Link className="verDetalleBoton" to={`/item/${id}`}> ver detalle </Link>
        </Card.Body>
      </Card>
        </div>
        
    
  );


}