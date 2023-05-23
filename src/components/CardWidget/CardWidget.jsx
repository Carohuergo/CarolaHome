import { useContext } from "react"
import cart from "./assets/shopping-cart-svgrepo-com (3).svg"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CardWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    return (
        
        <Link to="/cart">
        <img src={cart} alt="cart-widget" style={{height:30, width:30}} />
        {totalQuantity}
    
        </Link>
        
    )
}

export default CardWidget