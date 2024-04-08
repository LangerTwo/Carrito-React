import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../Components/layout";
import CartContext from "../Context/CartContext";
import CardOrders from "../Components/CardOrders";

function MyOrders() {
    const context = useContext(CartContext)
    return (
        <Layout>
            <div className="mb-5">
                <h1>My Orders</h1>
            </div>
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <CardOrders 
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>
                ))
            }
        </Layout>
    )
}

export default MyOrders