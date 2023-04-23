import CardWidget from "../CardWidget/CardWidget"
import logo from './logo_floristería_femenino_rosa-removebg-preview (1).png'
import "./NavBar.css"




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