import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { CartItem } from "../CartItem/CartItem"



export const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0)
        return (
            <div>
                <h1>No hay productos agregados al carrito</h1>
                <Link to="/">Productos</Link>
            </div>
        )

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h1>Carrito </h1>
            <h2>Total: ${total}</h2>
            <h2>Total productos: {totalQuantity}</h2>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <Link to="/">Finalizar Compra</Link>

        </div>
    )
}

