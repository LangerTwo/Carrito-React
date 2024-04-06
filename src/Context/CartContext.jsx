import { createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0)

  // Product Detail - Open/Close
  const [isPDetailOpen, setIsPDetailOpen] = useState(false)
  const openProductDetail = () => setIsPDetailOpen(true)
  const closeProductDetail = () => setIsPDetailOpen(false)

  // Checkout Side Menu - Open/Close
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const openSideMenu = () => setIsSideMenuOpen(true)
  const closeSideMenu = () => setIsSideMenuOpen(false)

  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({})

  // Shoppi Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  return (
    <CartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isPDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      openSideMenu,
      closeSideMenu,
      isSideMenuOpen,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
