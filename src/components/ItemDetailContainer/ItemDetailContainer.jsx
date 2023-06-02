
import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firabaseConfig"
import { Spinner } from 'react-bootstrap'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const id = useParams().id;

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, "products", id)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data }
        setProduct(productAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])



  return (
    <>
      {loading ? (
        <div style={{display:"flex", justifyContent: "center", marginBottom: "4rem" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ItemDetail {...product} />
          </div>
        </>
      )

      }

    </>

  )
}

export default ItemDetailContainer