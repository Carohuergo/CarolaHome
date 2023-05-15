import { Item } from "../Item/Item"


export const ItemList = ({products})=> {
    return (
        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
            {products.map(prod=> <Item key={prod.id}{...prod}/>)}
        </div>
    )
}

