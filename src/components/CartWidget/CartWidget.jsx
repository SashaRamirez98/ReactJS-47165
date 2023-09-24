import cart from "./assets/cartIconWhite.svg"
import classes from "./CartWidget.module.css"
import { useCart } from "../../context/cartContext"
import { useNavigate } from "react-router-dom"

const CartWidget = () => {

    const { totalQuantity } = useCart()
    const navigate = useNavigate()
    
    return(
            <button onClick={() => navigate('/cart')}>
                <img className={classes.imgCart} src={cart} />
                {totalQuantity}
            </button>   
    )
}

export default CartWidget