import { Card, Container, Row } from "react-bootstrap";
import {} from "../Item/Item.css"


export const CartItem = ({ name, precio, quantity }) => {


    return (
        <div>
            <Card style={{ width: '18rem', margin: 40, fontFamily: 'Castoro Titling' }} className="text-center">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Container>
                        <Row>
                            <p> Precio: ${precio}</p>
                            <p> Cantidad: {quantity}</p>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>


    )}