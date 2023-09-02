import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"

const ItemDetail = ({ name, img, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        console.log ('Se agregó ' + quantity)
        setQuantity(quantity)
    }

    return(
        <div>
            <h2> {name} </h2>
            <img src={img} />
            <h3> ${price} </h3>
            <h3>{description}</h3>
            <p>Stock disponible: {stock}</p>
            {
                quantity === 0 ? (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                ) : (
                <button>Finalizar compra</button>
                )
            }
            
        </div>
    )
}

export default ItemDetail