import { useContext } from "react"
import {} from "./CardWidget.css"
import cart from "./assets/shopping-cart-svgrepo-com (3).svg"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CardWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    return (
        
        <Link to="/cart" style={{textDecoration:"none", color:"black", displey: totalQuantity() > 0 ? "block" : "none"}} >
        <img className="cartImg" src={cart} alt="cart-widget" />
        {totalQuantity()}
    
        </Link>
        
    )
}

export default CardWidget