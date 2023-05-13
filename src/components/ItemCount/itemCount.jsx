import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import {} from "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }


  return (
    
    <div>
          <Container>
            <Row>
              <Col><Button variant="btn-sm" onClick={decrement}> - </Button></Col>
              <Col><h3> {quantity}</h3></Col>
              <Col><Button variant="btn-sm" onClick={increment}> + </Button></Col>
            </Row>
          </Container>
          <Link className="agregarCarritoBoton" variant="primary" onClick={() => onAdd(quantity)} disabled={!stock}> Agregar al carrito</Link>

    </div>
          
   
    
  );
}

export default ItemCount;
