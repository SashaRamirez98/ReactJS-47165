import { useState } from "react"
import classes from './ContactForm.module.css'
import { useForm } from 'react-hook-form'

const ContactForm = ({ createOrder }) => {
    const{ register, formState:{errors}} =useForm()
 
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
       const handleConfirm = (event) => {
        event.preventDefault()
        }


    return(
        <>
            <h2>Complete el formulario para finalizar su orden.</h2> 
            <form onSubmit={handleConfirm} className={classes.form}>
                <label className={classes.label}>
                    Nombre
                    <input 
                    placeholder="Juan Perez"
                    className= {classes.input}
                    type="text"
                    value={name}
                    onChange={({ target }) => setName(target.value)}/>
                </label>
                <label>
                    Celular
                    <input 
                    placeholder="11-12345678"
                    className= {classes.input}
                    type="number"
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                    required/>
                </label>
                <label>
                    Email
                    <input 
                    placeholder="midireccion@gmail.com"
                    className= {classes.input}
                    type="text"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    required/>
                </label>
                </form>
            <button onClick={() => createOrder({name, phone, email})}>Generar orden</button>
        </>
    )
}

export default ContactForm