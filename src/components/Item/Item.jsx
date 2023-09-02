import classes from "./Item.module.css"
import { useNavigate } from "react-router-dom"

const Item = ( { id, name, img, price} ) => {
    const navigate = useNavigate()

    return (
        <div>
            <h3>{name}</h3>
            <img className= {classes.img} src={img} />
            <p>Precio: $ {price}</p>
            <button onClick={() => navigate(`/detail/${id}`)}>Ver detalle</button>
        </div>
    )
}

export default Item