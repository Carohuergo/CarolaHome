import CardWidget from "../CardWidget/CardWidget"
import logo from './ch (1).png'
import "./NavBar.css"
import { Link } from "react-router-dom";



const NavBar = () => {
    return (



        <nav className="navBarStyle" >

            <div>
                <Link to="/productos" className="ButtonStyle" >
                    Productos
                </Link>
                <Link to="/productos/sillones" className="ButtonStyle">
                    Sillones
                </Link>
                <Link to="/">
                    <img src={logo} alt="logo" className="logoStyle" />
                </Link>

                <Link to="/productos/muebles" className="ButtonStyle">
                    Muebles
                </Link>
                <Link to="/productos/iluminacion" className="ButtonStyle">
                    Iluminacion
                </Link>

                <CardWidget />


            </div>

        </nav>
    )
}

export default NavBar