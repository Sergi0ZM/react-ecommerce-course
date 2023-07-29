import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);
  return (
    <>
      <div className="flex items-center justify-center relative w-80">
        <h1>My Orders</h1>
      </div>
      {order.map((order, index) => {
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>;
      })}
    </>
  );
}

export { MyOrders };
