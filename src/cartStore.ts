import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export const [getCart, setCart] = createStore<CartItem[]>([]);
export const [isCartOpen, setIsCartOpen] = createSignal(false);

type ItemDisplayInfo = Pick<CartItem, "id" | "name" | "image" | "price">;

export function addCartItemWithSolidStore({
  id,
  name,
  image,
  price,
}: ItemDisplayInfo) {
  if (getCart.find((item) => item.id === id)) {
    setCart(
      (el) => el.id === id,
      "quantity",
      (el) => el + 1
    );
    // add to localstorage
    localStorage.setItem("cart", JSON.stringify(getCart));
  } else {
    setCart([...getCart, { id, name, image, price, quantity: 1 }]);
  }
}
