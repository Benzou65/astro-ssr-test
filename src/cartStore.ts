import { createSignal } from "solid-js";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export const [localCart, setLocalCart] = createSignal<CartItem[]>([]);
export const [isCartOpen, setIsCartOpen] = createSignal(false);

export type ItemDisplayInfo = Pick<CartItem, "id" | "name" | "image" | "price">;

export function addCartItem({ id, name, image, price }: ItemDisplayInfo) {
  if (localCart().find((item) => item.id === id)) {
    setLocalCart(
      localCart().map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  } else {
    setLocalCart([...localCart(), { id, name, image, price, quantity: 1 }]);
  }
}
