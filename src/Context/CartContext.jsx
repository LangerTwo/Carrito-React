import { createContext, useEffect, useState } from 'react'

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

  // Shopping Cart - Order
  const [order, setOrder] = useState([])

  // Get products
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  // Get products bt category
  const [searchByCategory, setSearchByCategory] = useState(null)
  // console.log('searchByCategory: ', searchByCategory)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])
  // console.log('filteredItems: ', filteredItems)

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
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      setFilteredItems,
      searchByCategory,
      setSearchByCategory,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
