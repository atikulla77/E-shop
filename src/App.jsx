import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Product from './pages/product'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Blog from './pages/blog'
import Contact from './pages/contact'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
      </Route>
    )
  )
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
