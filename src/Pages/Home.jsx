import { useContext } from 'react'
import Layout from '../Components/layout'
import Card from '../Components/Card'
import ProductDetail from '../Components/ProductDetail'
import CartContext from '../Context/CartContext'


const Home = () => {
  const context = useContext(CartContext)

  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          context.items?.map(item => (
            <Card key={item.id} data={item}/>
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
