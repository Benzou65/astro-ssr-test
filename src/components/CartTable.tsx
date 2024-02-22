import type { Cart } from "../api";
import type { ui } from "../i18n/ui";
import { useTranslations } from "../i18n/utils";

type Props = {
  cart: Cart;
  lang: keyof typeof ui;
};

export default function CartTable({ cart, lang }: Props) {
  const t = useTranslations(lang);
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>{t("cart.item")}</th>
          <th>{t("cart.quantity")}</th>
        </tr>
      </thead>
      <tbody>
        {cart.items.map((item) => (
          <tr>
            <td
              style={{ position: "relative", width: "100px", height: "150px" }}
            >
              <img
                src={item.image}
                alt=""
                style={{ "object-fit": "cover", width: "100%", height: "100%" }}
              />
            </td>
            <td>{item.name}</td>
            <td style={{ "text-align": "right" }}>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
