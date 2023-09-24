import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logoAC.jpeg"
import classes from "./NavBar.module.css"
import { db } from "../../services/firebase/firebaseConfig"
import { NavLink, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { getDocs, collection, query } from "firebase/firestore"

const NavBar = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesRef = query(collection(db, 'categories'))
        
        getDocs(categoriesRef)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })

                setCategories(categoriesAdapted)
            })
    }, [])

    return (
        <nav>
            <img onClick={() => navigate ('/')} className={ classes.logo } src={ logo } />
            <section>
            {
                categories.map(cat => (
                    <NavLink className={classes.button} key={cat.id} to={`/category/${cat.slug}`}>{cat.name}</NavLink>
                ))
            }
            <CartWidget />
            </section>
        </nav>
    )
}

export default NavBar