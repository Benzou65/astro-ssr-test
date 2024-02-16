import type { JSX } from "solid-js";
import { addToUserCart } from "../api";
import { setIsCartOpen, type CartItem } from "../cartStore";
import { addCartItem } from "../cartStore";

export default function AddToCartForm({
  product,
  children,
}: {
  product: CartItem;
  children: JSX.Element;
}) {
  async function addToCart(e: SubmitEvent) {
    e.preventDefault();
    setIsCartOpen(true);
    addCartItem(product);
    addToUserCart(product);
  }

  return <form onSubmit={addToCart}>{children}</form>;
}
