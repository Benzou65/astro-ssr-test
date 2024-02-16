import type { JSX } from "solid-js";
import {
  setIsCartOpen,
  type CartItem,
  addCartItemWithSolidStore,
} from "../cartStore";

export default function AddToCartForm({
  product,
  children,
}: {
  product: CartItem;
  children: JSX.Element;
}) {
  function addToCart(e: SubmitEvent) {
    e.preventDefault();
    setIsCartOpen(true);
    addCartItemWithSolidStore(product);
  }

  return <form onSubmit={addToCart}>{children}</form>;
}
