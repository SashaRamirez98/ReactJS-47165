import classes from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ( { id, name, img, price} ) => {
    const handleClick = (e) => {
        e.stopPropagation()
        console.log('item')
    }


    return (
        <div onClick={handleClick}>
            <h3>{name}</h3>
            <img className= { classes.img } src={img}/>
            <p>Precio: $ {price}</p>
            <Link className={ classes.button } to={`/detail/${id}`} >Ver Detalle</Link>
        </div>
    )
}

export default Item