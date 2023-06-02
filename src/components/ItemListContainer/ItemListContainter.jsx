import { useEffect, useState } from "react"
import "./Gretting.css"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firabaseConfig"
import { Spinner } from "react-bootstrap"




const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const category = useParams().category

    useEffect(() => {
        setLoading(true)

        const collectionRef = category
            ? query(collection(db, "products"), where("category", "==", category))
            : collection(db, "products")

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [category])


    return (
        <>

            {loading ? (
                <div style={{displey:"flex", justifyContent:"center", marginBottom:"4rem"}}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                </div>
            ) : (
                <>
                    <div >
                        <h3 className="SaludoSyle">{greeting}</h3>
                        
                    </div>
                    <div>
                        <ItemList products={products} />
                    </div>
                </>
            )

            }
            
        </>

    )
}
export default ItemListContainer