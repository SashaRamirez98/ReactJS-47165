import { useCart } from "../../context/cartContext"
import classes from './Cart.module.css'
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, removeItem, total } = useCart()

    return(
        <>
            <h1>Cart</h1>
            <section>
                {
                    cart.map(prod => {
                        return(
                            <div key={prod.id} className={classes.card}>
                               <h1>{prod.name} </h1>
                               <h4>Unidades: {prod.quantity} </h4>
                               <button onClick={() => removeItem(prod.id)}>Remove</button>
                            </div>
                            
                        )
                    })
                }
            </section>
            <h2>Total: ${total}</h2>
            <Link className={classes.button} to='/checkout'>Checkout</Link>
        </>
    )
}

export default Cart