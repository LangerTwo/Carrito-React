import { BsX } from "react-icons/bs";
{/* <BsX /> */}

const CardOrders = (props) => {
    const { totalPrice, totalProducts } = props

  return (
    <div className='flex justify-between items-center px-2 mb-2 border border-black'>
        <p>
            <span>06/04/2024</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </p>
    </div>
  )
}

export default CardOrders