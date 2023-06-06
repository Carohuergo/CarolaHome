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
                    <Card.Title className="tituloStyle">{name}</Card.Title>
                    <Container>
                        <Row className="rowStyle">
                            <Col>
                                <Card.Img variant="top" src={img} />
                            </Col>
                            <Col>
                                <Row >
                                    <p className="textoCard"> Precio x unidad: ${precio}</p>
                                    <p className="textoCard"> Cantidad: {quantity}</p>
                                    <p className="textoCard"> Total: ${(precio*quantity)}</p>
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
