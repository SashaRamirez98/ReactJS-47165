import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logoAC.jpeg"
import classes from "./NavBar.module.css"

const NavBar = () => {
    return (
        <nav>
                <img className={ classes.logo } src={ logo } alt="" />
            <div>
                <button>Mesas</button>
                <button>Lamparas</button>
                <button>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar