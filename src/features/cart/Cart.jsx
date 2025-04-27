import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Buttons from "../../ui/Buttons";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector((store) => store.user.username);
  const cart = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to={"/menu"}>&larr; Back to menu</LinkButton>

      <h2 className="semibold mt-7 text-xl capitalize">
        Your cart, {username}
      </h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((el) => (
          <CartItem item={el} key={el.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Buttons to="/order/new" type="primary">
          Order pizzas
        </Buttons>

        <Buttons type="secondary" onClick={handleClearCart}>
          Clear cart
        </Buttons>
      </div>
    </div>
  );
}

export default Cart;
