import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect (() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
        .then(result => {
            setProducts(result)
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if (loading){
        return <span className="loader"></span>
    }

    return (
        <main>
            <h2>{greeting}</h2>
            <ItemList products= {products} />
        </main>
    )
}

export default ItemListContainer