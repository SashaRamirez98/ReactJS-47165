import './App.css'
import { useState, createContext } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/cartContext'

export const MiContext = createContext()

function App() {
  const [cart, setCart] = useState([])

  const addItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)) {
      setCart(prev => [...prev, productToAdd])
    } else {
      console.error('Ya esta agregado')
    }
  }

  const isInCart = (id) => {
    return cart.some(prod = prod.id === id)
  }

  return (
    <>
      <CartProvider>
        <MiContext.Provider value={{ cart, addItem }}>
          <BrowserRouter>
            <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting="¡Bienvidos/as a AC Muebles!"/> }/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos por Categoria"/> }/>
                <Route path='/detail/:productId' element={<ItemDetailContainer /> }/>
                {/* <Route path='/cart' element={<Cart />} /> */}
                <Route path='*' element={<h1>Error 404 Not Found</h1>} />
              </Routes>
          </BrowserRouter>
        </MiContext.Provider>
      </CartProvider>
    </>
  )
}

export default App
