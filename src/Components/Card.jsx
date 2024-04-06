import { useContext } from 'react'
import CartContext from '../Context/CartContext'
import { BsPlus } from "react-icons/bs";
// import victini from '/victini.png'

const Card = (data) => {
  const context = useContext(CartContext)

  const showProduct = (productDetail) => {
    context.closeSideMenu()
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.closeProductDetail()
    context.openSideMenu()
    // console.log('Cart: ', context.cartProducts)
  }

  return (
    <div 
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(data.data)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
            {data.data.category.name}
        </span>
        <img src={data.data.images[0]} alt={data.data.title} className='w-full h-full object-cover rounded-lg bg-red-500'/>
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1' 
          onClick={(event) => addProductsToCart(event, data.data)}
        >
            <BsPlus />
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>
            {data.data.title}
        </span>
        <span className='text-lg font-medium'>
            {data.data.price}
        </span>
      </p>
    </div>
  )
}

export default Card
