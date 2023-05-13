
import React, { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const id = useParams ().id;

    useEffect (()=>{
        getProductById(id)
        .then(response=>{
            setProduct(response)
        })
        .catch (error=> {
            console.log(error)
        })
    },[id])

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
         <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer