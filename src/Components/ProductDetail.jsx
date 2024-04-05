import { useContext } from "react";
import { BsX } from "react-icons/bs";
import CartContext from "../Context/CartContext";

const ProductDetail = () => {
  const context = useContext(CartContext)
  console.log('Product To Show: ', context.productToShow)

  return (
    <aside className={`${context.isPDetailOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-80px)] flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <div className="bg-red-500 rounded-full cursor-pointer">
                <BsX className="text-2xl text-white" onClick={() => context.closeProductDetail()}/>
            </div>
        </div>
        <figure className="px-6">
          <img className="w-full h-full rounded-lg" src={context.productToShow.images} alt={context.productToShow.title} />
        </figure>
        <p className="flex flex-col p-6 font-medium">
          <span className="text-2xl mb-1">${context.productToShow.price}</span>
          <span className="text-md">${context.productToShow.title}</span>
          <span className="font-light text-sm">{context.productToShow.description}</span>
        </p>
    </aside>
  )
}

export default ProductDetail
