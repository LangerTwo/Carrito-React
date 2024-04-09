import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CartProvider } from '../Context/CartContext'
// import { useState } from 'react'
import '../App.css'
import Home from './Home'
import MyAccount from './MyAccount'
import MyOrder from './MyOrder'
import MyOrders from './MyOrders'
import NotFound from './NotFound'
import SingIn from './SingIn'
import Navbar from '../Components/Navbar'
import CheckoutSideMenu from '../Components/CheckoutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furniture', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
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
        <CheckoutSideMenu />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
