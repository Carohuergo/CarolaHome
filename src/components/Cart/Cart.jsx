import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { CartItem } from "../CartItem/CartItem"
import { } from "./Cart.css"
import { Button } from "react-bootstrap"



export const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity() === 0)
        return (
            <div className="carritoSinProducto">
                <h1 className="tituloStyle">No hay productos agregados al carrito</h1>
                <Button variant="dark" className="BotonesCart">
                <Link className="buttonProductos" to="/productos">Productos</Link>
                </Button>
            </div>
        )

    return (
        <>
            <h1 className="tituloStyle">Shopping Cart </h1>
            <div className="CartStyle">
                {cart.map(p => <CartItem key={p.id} {...p} />)}
            </div>
            <div className="totalCompraStyle">
                <p>Precio final: $ {total()}</p>
                <p>Cantidad total de productos: {totalQuantity()}</p>
                <Button variant="outline-dark" className="BotonesCart" onClick={() => clearCart()}>Limpiar Carrito</Button>
                <Button variant="outline-dark" className="BotonesCart">
                <Link className="buttonFinalizar" to="/checkout">Finalizar Compra</Link>
                </Button>
                
            </div>
        </>
    )
}

