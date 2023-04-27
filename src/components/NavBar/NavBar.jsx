import CardWidget from "../CardWidget/CardWidget"
import logo from './logo.png'
import "./NavBar.css"
import {} from "react-bootstrap"




const NavBar = () => {
    return (
        <nav className="navBarStyle">
        
            <div>
            <button className="ButtonSyle">
                Historia
            </button>
            <button className="ButtonSyle">
                Sillones
            </button>
            <img src={logo} alt="logo" style={{height:300, width:300}}/>
            <button className="ButtonSyle">
                Mesas
            </button>
            <button className="ButtonSyle">
                Accesorios
            </button>
            
            </div>
            <CardWidget />
            
        </nav>


    )
}

export default NavBar