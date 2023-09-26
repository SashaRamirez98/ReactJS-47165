import classes from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ( { id, name, img, price} ) => {
    const handleClick = (e) => {
        e.stopPropagation()
    }


    return (
        <div className={classes.card} onClick={handleClick}>
            <h3 className={classes.font}>{name}</h3>
            <img className= { classes.img } src={img}/>
            <p>Precio: ${price}</p>
            <Link className={ classes.button } to={`/detail/${id}`} >Ver Detalle</Link>
        </div>
    )
}

export default Item