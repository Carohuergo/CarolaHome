import { Card, Container, Row } from "react-bootstrap";
import ItemCount from "../ItemCount/itemCount";

const ItemDetail = ({name, descrip,precio, img}) => {
    return (
      
        <div>
        <Card style={{ width: '20rem', fontFamily: 'Castoro Titling' }} className="text-center">
        <Card.Img variant="top" src={img} style={{objectFit:"contain"}}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text style={{ fontFamily: "Work Sans, sans" }}>
            {descrip}
          </Card.Text>
          <Container>
            <Row>
              <p> Precio: ${precio}</p>
            </Row>
          </Container>
          <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log ("cantidad agregada ", quantity)}/>
          
        </Card.Body>
      </Card>
        </div>
        
    
  );
}

export default ItemDetail

