// import { getProductById } from "../../asyncMock"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig"
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState (true)

    const { productId } = useParams()

    useEffect (() => {
        setLoading(true)

        const productRef = doc(db, 'products', productId)

        getDoc(productRef)
        .then(documentSnapshot => {
            const fields = documentSnapshot.data()
            const productAdapted = { id: documentSnapshot.id, ...fields}
            setProduct(productAdapted)
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })

    }, [productId])

    if (loading){
        return <span className="loader"></span>
    }

    return (
        <div>
            <h1>Detalle del Producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer