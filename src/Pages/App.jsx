import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CartProvider } from '../Context/CartContext'
// import { useState } from 'react'
import '../App.css'
import Home from './Home'
import MyAccount from './MyAccount'
import MyOrder from './MyOrder'
import NotFound from './NotFound'
import SingIn from './SingIn'
import Navbar from '../Components/Navbar'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sing-in', element: <SingIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}

function App() {
  // const [count, setCount] = useState(0)
  return (
    <CartProvider>      
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App