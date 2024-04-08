import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import Layout from '../Components/layout'
import CartContext from '../Context/CartContext'
import OrderCard from '../Components/OrderCard'
import { BsChevronLeft   } from "react-icons/bs";


const MyOrder = () => {
  const context = useContext(CartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-5">
          <Link to='/my-orders' className="absolute left-0">
              <BsChevronLeft className="h-6 w-6 cursor-pointer"/>
          </Link>
          <h1>MyOrder</h1>
      </div>
      <div className="flex flex-col w-80">
          {
            context.order?.[index]?.products.map( product => (
              <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={product.price}
              />
            ))
          }
        </div>
    </Layout>
  )
}

export default MyOrder