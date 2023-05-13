import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import "./Gretting.css"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

 

const ItemListContainer  = ({greeting}) => {
    const [products, setProducts] = useState([])
    const category =useParams ().category

    useEffect(()=> {
        getProducts()
           .then((response)=> {
            if (category) {
            setProducts(response.filter ((prod)=>prod.category ===category))
            } else {
                setProducts(response)
            }
        })
            .catch(error=>{
            console.error(error)
            })
    },[category])
   
    return (
        <>
        <div className="SaludoSyle">
            <h1 >{greeting}</h1>
        </div>
        <div>
        <ItemList products={products}/>
        </div>
        </>

    )
}

export default ItemListContainer