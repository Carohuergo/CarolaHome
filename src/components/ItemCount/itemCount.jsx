// import { Button } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
import sillonCalma from "./sillonCalma.jpg";

function ItemCount() {
  return (
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="./sillonCalma.jpg" />
    //   <Card.Body>
    //     <Card.Title>Sillon Calma</Card.Title>
    //     <Card.Text>
    //       Sillon de tres cuerpos con funda de tussor a eleccion.
    //     </Card.Text>
    //     <Button variant="primary">Agregar al carrito</Button>
    //   </Card.Body>
    // </Card>
    <div className="card" style={{ width: "18rem", margin: 30 }}>
      <img src={sillonCalma} className="card-img-top" alt="sillon" />
      <div className="card-body">
        <h5 className="card-title">Sillon Calma</h5>
        <p className="card-text">
          Sillon de tres cuerpos con funda de tussor a eleccion.
        </p>
        <a href="#" className="btn btn-primary">
          Agregar al carrito
        </a>
      </div>
    </div>
  );
}

export default ItemCount;
