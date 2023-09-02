import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState(1)
    
    const increment = () => {
        setCount (prev => prev + 1)
    }

    const decrement = () => {
        if (count > 1)
        setCount (prev => prev - 1)
    }

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount