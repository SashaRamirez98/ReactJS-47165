import { useState } from "react"
import classes from './ContactForm.module.css'

const ContactForm = ({ createOrder }) => {
 
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    // const [errors, setErrors] = useState({});

    // const validateForm = () => {
    //     const errors = {};
    
    //     if (!name.trim()) {
    //       errors.name = 'El nombre es requerido';
    //     }
    
    //     if (!phone.trim()) {
    //       errors.phone = 'El número de celular es requerido';
    //     } else if (!/^\d+$/.test(phone)) {
    //       errors.phone = 'El número de celular debe contener solo números';
    //     }
    
    //     if (!email.trim()) {
    //       errors.email = 'El correo electrónico es requerido';
    //     } else if (!/\S+@\S+\.\S+/.test(email)) {
    //       errors.email = 'El correo electrónico no es válido';
    //     }
    
    //     return errors;
    //   };
    

       const handleConfirm = (event) => {
        event.preventDefault()

    //     const validationErrors = validateForm();

    //     if (Object.keys(validationErrors).length === 0) {
    //       createOrder({ name, phone, email });
    //       setErrors({}); 
    //     } else {
    //       setErrors(validationErrors);
    //     }
  }

    return(
        <>
            <h2>Formulario</h2>
            <form onSubmit={handleConfirm} className={classes.form}>
                <label className={classes.label}>
                    Nombre
                    <input 
                    className= {classes.input}
                    type="text"
                    value={name}
                    onChange={({ target }) => setName(target.value)}/>
                    {/* {errors.name && <span className={classes.error}>{errors.name}</span>} */}
                </label>
                <label>
                    Celular
                    <input 
                    className= {classes.input}
                    type="text"
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}/>
                    {/* {errors.phone && <span className={classes.error}>{errors.phone}</span>} */}
                </label>
                <label>
                    Email
                    <input 
                    className= {classes.input}
                    type="text"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}/>
                    {/* {errors.email && <span className={classes.error}>{errors.email}</span>} */}
                </label>
            </form>
            <button onClick={() => createOrder( name, phone, email )}>Generar orden</button>
        </>
    )
}

export default ContactForm