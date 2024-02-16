import { setCart } from "../cartStore";

export default function LoadCart() {
  setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
}
