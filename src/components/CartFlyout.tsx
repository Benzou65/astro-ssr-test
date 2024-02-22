import { localCart, setIsCartOpen } from "../cartStore";
import { isCartOpen } from "../cartStore";
import { useTranslations } from "../i18n/utils";
import { ui } from "../i18n/ui";
import styles from "./CartFlyout.module.css";

type Props = {
  lang: keyof typeof ui;
};

export default function CartFlyout({ lang }: Props) {
  const t = useTranslations(lang);
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
              <p>
                {t("cart.quantity")}: {cartItem.quantity}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </aside>
  );
}
