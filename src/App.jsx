import './App.css'
import { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import { NotificationProvider } from './Notification/NotificationServices' 
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'


function App() {
  return (
    <>
      <NotificationProvider>
        <CartProvider>
            <BrowserRouter>
              <NavBar />
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting="¡Bienvidos/as a AC Muebles!"/> }/>
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos por Categoria"/> }/>
                  <Route path='/detail/:productId' element={<ItemDetailContainer /> }/>
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/checkout' element={<Checkout />} />
                  <Route path='*' element={<h1>Error 404 Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </>
  )
}

export default App
