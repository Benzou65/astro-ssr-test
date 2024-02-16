import { localCart, setIsCartOpen } from "../cartStore";
import { isCartOpen } from "../cartStore";
import styles from "./CartFlyout.module.css";
import db from "../models/db.json";

export default function CartFlyout() {
  return (
    <aside hidden={!isCartOpen()} class={styles.container}>
      <div class={styles.closeIcon}>
        <span onClick={() => setIsCartOpen(false)}>X</span>
      </div>
      {localCart().length ? (
        <ul class={styles.list} role="list">
          {localCart().map((cartItem) => (
            <li class={styles.listItem}>
              <img
                class={styles.listItemImg}
                src={cartItem.image}
                alt={cartItem.name}
              />
              <h3>{cartItem.name}</h3>
              <p>Quantity: {cartItem.quantity}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </aside>
  );
}
