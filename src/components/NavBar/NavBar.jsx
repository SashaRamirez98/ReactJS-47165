import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logoAC.jpeg"
import classes from "./NavBar.module.css"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <nav>
                <img onClick={() => navigate ('/')} className={ classes.logo } src={ logo } />
            <div>
                <button onClick={() => navigate ('/category/mesas')}>Mesas</button>
                <button onClick={() => navigate ('/category/lamparas')}>Lamparas</button>
                <button onClick={() => navigate ('/category/accesorios')}>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar