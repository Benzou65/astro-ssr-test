import { getCart } from "../cartStore";

export default function CartTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {getCart.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
