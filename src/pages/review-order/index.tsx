import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import { cartAtom } from "../../atoms/atoms";
import styles from "./styles.module.css";

const ReviewOrder = () => {
  const [cart] = useAtom(cartAtom);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.reviewOrder}>
      <div className={styles.selectedCategory}>
        <h1>Review Your Order</h1>
      </div>

      <div className={styles.orderSummary}>
        <table className={styles.orderTable}>
          <thead>
            <tr>
              <th>
                <h3>Item</h3>
              </th>
              <th>
                <h3>Quantity</h3>
              </th>
              <th>
                <h3>Price</h3>
              </th>
              <th>
                <h3>Amout</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>SEK {item.price}</td>
                  <td>SEK {item.price * item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.grandTotal}>
        <h1>Grand Total: SEK {total.toFixed(2)}</h1>
      </div>

      <div className={styles.actions}>
        <button
          className={styles.checkoutBtn}
          onClick={() => navigate("/payment")}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default ReviewOrder;
