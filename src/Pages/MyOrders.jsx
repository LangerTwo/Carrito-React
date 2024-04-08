import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../Components/layout";
import CartContext from "../Context/CartContext";
import CardOrders from "../Components/CardOrders";

function MyOrders() {
    const context = useContext(CartContext)
    return (
        <Layout>
            MyOrders
            {
                context.order.map((order, index) => {
                    <Link key={index} to={`/my-orders${order.id}`}>
                        <CardOrders 
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>
                })
            }
        </Layout>
    )
}

export default MyOrders