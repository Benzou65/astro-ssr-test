import style from "./Cart.module.css";
import { getCart } from "../cartStore";
import { createEffect, createSignal } from "solid-js";

export default function Cart() {
  const [totalItems, setTotalItems] = createSignal(0);

  createEffect(() => {
    setTotalItems(getCart.reduce((acc, item) => acc + item.quantity, 0));
  });

  return (
    <a href="/cart" class={style.cart}>
      <span class="material-icons cart-icon">shopping_cart</span>
      <span class={style.count}>{totalItems()}</span>
    </a>
  );
}
