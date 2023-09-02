import { getProductById } from "../../asyncMock"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { productId } = useParams()

    useEffect (() => {
        getProductById(productId)
        .then(res => { 
            setProduct(res)
        })
        .catch(error => {
            console.error(error)
        })
    }, [productId])

    return (
        <div>
            <h1>Detalle del Producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer