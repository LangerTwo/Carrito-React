import { useContext } from "react";
import { BsX } from "react-icons/bs";
import CartContext from "../Context/CartContext";
import OrderCard from "./OrderCard";

const CheckoutSideMenu = () => {
    const context = useContext(CartContext)
    // console.log('Cart: ', context.cartProducts)
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    return (
        <aside className={`${context.isSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-80px)] flex-col fixed top-20 right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div className="bg-red-500 rounded-full cursor-pointer">
                    <BsX className="text-2xl text-white" onClick={() => context.closeSideMenu()}/>
                </div>
            </div>
            <div className="overflow-y-scroll">
                {
                    context.cartProducts.map( product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </aside>
      )
}

export default CheckoutSideMenu
