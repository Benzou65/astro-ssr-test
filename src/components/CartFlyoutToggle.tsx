import { isCartOpen, setIsCartOpen } from "../cartStore";

export default function CartButton() {
  return <button onClick={() => setIsCartOpen(!isCartOpen())}>Cart</button>;
}
