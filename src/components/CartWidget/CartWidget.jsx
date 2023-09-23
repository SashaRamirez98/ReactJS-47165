import cart from "./assets/cartIconWhite.svg"
import classes from "./CartWidget.module.css"
import { useCart } from "../../context/cartContext"

const CartWidget = () => {

    const { totalQuantity } = useCart()

    return(
            <button>
                <img className={classes.imgCart} src={cart} />
                {totalQuantity}
            </button>   
    )
}

export default CartWidget