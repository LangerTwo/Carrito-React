import { BsChevronRight, BsCalendar, BsBagFill   } from "react-icons/bs";

const CardOrders = (props) => {
    const { totalPrice, totalProducts } = props

  return (
    <div className='flex justify-between items-center px-2 mb-3 border border-black rounded-lg w-80 p-4'>
        <div className="flex justify-between w-full">
            <p className="flex flex-col">
                <span className="font-light flex items-center gap-2"><BsCalendar /> 06/04/2024</span>
                <span className="font-light flex items-center gap-2"><BsBagFill /> {totalProducts} Articles</span>
            </p>
            <p className="flex items-center gap-3">
                <span className="font-medium text-2xl">{totalPrice}</span>
                <BsChevronRight className="h-6 w-6 cursor-pointer"/>
            </p>
        </div>
    </div>
  )
}

export default CardOrders