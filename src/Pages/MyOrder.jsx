import React, { useContext } from 'react'
import Layout from '../Components/layout'
import CartContext from '../Context/CartContext'
import OrderCard from '../Components/OrderCard'

const MyOrder = () => {
  const context = useContext(CartContext)

  return (
    <Layout>
      MyOrder
      <div className="flex flex-col w-80">
          {
            context.order?.slice(-1)[0].products.map( product => (
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