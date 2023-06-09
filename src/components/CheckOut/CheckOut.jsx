import "./CheckOut.css"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, writeBatch, collection, getDocs, query, where, documentId, addDoc } from "firebase/firestore"
import { CheckOutForm } from "../CheckOutForm/CheckOutForm"
import { db } from "../../services/firebase/firabaseConfig"


export const CheckOut = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, "products")

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, objOrder)
                
                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error("hay productos que estan fuera de stock")
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    if (loading) {
        return <h1  className="generarOrden"> Estamos verificando la compra...</h1>
    }

    if (orderId) {
        return <>
            <h1 className="generarOrden">¡Compra confirmada!</h1>
            <h2 className="generarOrden">El id de su orden es: {orderId}</h2>
        </>
        
    }

    return (
        <div className="formularioContenedor">
            <CheckOutForm onConfirm={createOrder} />
        </div>
    )
}