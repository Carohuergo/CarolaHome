import { Card, Container, Row } from "react-bootstrap";
import ItemCount from "../ItemCount/itemCount";
import { CartContext} from "../../context/CartContext"
import { useContext, useState } from "react";

const ItemDetail = ({name, id, descrip,precio, img}) => {
   const [quantityAdded, setQuantityAdded]= useState (0)
   const {addItem} = useContext(CartContext)

   const handleOnAdd =(quantity) => {
    setQuantityAdded(quantity)

    const item ={
      id,name,precio
    }
    addItem(item, quantity)
  }
  
    return (
      
        <div style={{marginBottom:40}}>
        <Card style={{ width: '20rem', fontFamily: 'Castoro Titling'}} className="text-center">
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
          <ItemCount initial={1} stock={10} handleOnAdd={handleOnAdd} quantityAdded={quantityAdded}/>
          
        </Card.Body>
      </Card>
        </div>
        
    
  );
}

export default ItemDetail

