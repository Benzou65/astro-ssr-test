import style from "./Cart.module.css";
import type { Cart } from "../api";
import { localCart, setLocalCart } from "../cartStore";
import { createEffect, createSignal, onMount } from "solid-js";

export default function Cart({ cart }: { cart: Cart }) {
  const [count, setCount] = createSignal(
    cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );
  onMount(() => {
    setLocalCart(cart.items);
  });
  createEffect(() => {
    setCount(localCart().reduce((acc, item) => acc + item.quantity, 0));
  });
  return (
    <a href="/cart" class={style.cart}>
      <span class="material-icons cart-icon">shopping_cart</span>
      <span class={style.count}>{count()}</span>
    </a>
  );
}
