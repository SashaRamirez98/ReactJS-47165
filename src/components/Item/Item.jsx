import classes from "./Item.module.css"

const Item = ( {name, img, price} ) => {
    return (
        <div>
            <h3>{name}</h3>
            <img className= {classes.img} src={img} />
            <p>Precio: $ {price}</p>
            <button>Ver detalle</button>
        </div>
    )
}

export default Item