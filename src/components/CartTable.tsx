import type { Cart } from "../api";

type Props = {
  cart: Cart;
};

export default function CartTable({ cart }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Count</th>
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
