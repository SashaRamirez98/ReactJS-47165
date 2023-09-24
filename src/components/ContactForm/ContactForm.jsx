import { useState } from "react"
import { useForm } from 'react-hook-form'

const ContactForm = ({ createOrder }) => {
 
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    return(
        <>
            <h1>Formulario</h1>
            <form>
                <input placeholder="Nombre y Apellido"/>
                <input placeholder="Celular"/>
                <input placeholder="Email"/>
            </form>
            <button onClick={() => createOrder({ name, phone, email})}>Generar orden</button>
        </>
    )
}

export default ContactForm