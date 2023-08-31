import { getProducts } from '../../asyncMock'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        getProducts().then(result => {
            setProducts(result)
        })
    }, [])

    return (
        <main>
            <h2>{greeting}</h2>
            <ItemList products= {products} />
        </main>
    )
}

export default ItemListContainer