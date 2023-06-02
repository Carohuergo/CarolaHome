import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./CartItem.css"
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";



export const CartItem = ({ id, name, precio, quantity,img}) => {
    const {removeItem} =useContext(CartContext)


    return (
        <div>
            <Card className="cartStyle">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Container>
                        <Row className="rowStyle">
                            <Col>
                                <Card.Img variant="top" src={img} />
                            </Col>
                            <Col>
                                <Row >
                                    <p> Total: ${(precio*quantity)}</p>
                                    <p> Cantidad: {quantity}</p>
                                    <Button variant="light" size="sm" className="buttonRemover" onClick={() => removeItem(id)}>Eliminar</Button>
                                </Row>
                            </Col>
                            
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>






    )
}
