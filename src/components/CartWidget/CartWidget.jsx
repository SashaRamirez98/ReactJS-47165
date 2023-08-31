import cart from "./assets/cartIconWhite.svg"
import classes from "./CartWidget.module.css"

const CartWidget = () => {
    return(
            <button>
                <img className={classes.imgCart} src={cart} />
                0
            </button>   
    )
}

export default CartWidget