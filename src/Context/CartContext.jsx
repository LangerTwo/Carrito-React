import { createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0)

  // Product Detail - Open/Close
  const [isPDetailOpen, setIsPDetailOpen] = useState(false)
  const openProductDetail = () => setIsPDetailOpen(true)
  const closeProductDetail = () => setIsPDetailOpen(false)

  // Product Detail - Show Product
const [productToShow, setProductToShow] = useState({})

  return (
    <CartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isPDetailOpen,
      productToShow,
      setProductToShow,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
