import { useState } from "react"
import { useCart } from "../../context/cartContext"
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import ContactForm from "../ContactForm/ContactForm"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useCart()


    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total
            }
            
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const { docs } = await getDocs(productsRef)
    
            docs.forEach(doc => {
                const fields = doc.data()
                const stockDb = fields.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fields })
                }
            })
    
            if(outOfStock.length === 0) {
                const orderRef = collection(db, 'orders')
    
                const { id: orderId } = await addDoc(orderRef, objOrder)
                
                batch.commit()
                clearCart()
                setOrderId(orderId)
            } else {
                console.error('Hay productos fuera de stock...')
            }
        } catch (error) {
            console.error('Ocurrio un error al obtener datos: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if (orderId){
        return <h1>El id de su compra es: {orderId}</h1>
    }

    return(
        <>
         <h1>Checkout</h1>
         <ContactForm createOrder={createOrder} />
        </>
    )
}
export default Checkout