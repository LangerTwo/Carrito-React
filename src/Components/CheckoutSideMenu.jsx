import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";
import CartContext from "../Context/CartContext";
import OrderCard from "./OrderCard";
import { totalPrice } from "../utils";

const CheckoutSideMenu = () => {
    const context = useContext(CartContext)
    // console.log('Cart: ', context.cartProducts)
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: Date.now(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.closeSideMenu()
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }

    return (
        <aside className={`${context.isSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-80px)] flex-col fixed top-20 right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div className="bg-red-500 rounded-full cursor-pointer">
                    <BsX className="text-2xl text-white" onClick={() => context.closeSideMenu()}/>
                </div>
            </div>
            <div className="overflow-y-scroll flex-1">
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
            <div className="px-3 mb-6">
                <p className="flex justify-between items-center mb-2 px-3">
                    <span className="font-light">Total:</span>
                    <span className="font-medium text-2xl">{totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button 
                        className="bg-black py-3 text-white w-full rounded-lg" 
                        onClick={() => handleCheckout()}>
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
      )
}

export default CheckoutSideMenu
