import QRCode from "qrcode.react";
import { useAtom } from "jotai";
import { cartAtom, orderTypeAtom } from "../../atoms/atoms";

import styles from "./styles.module.css";

const Payment = () => {
  const [cart] = useAtom(cartAtom);
  const [orderType] = useAtom(orderTypeAtom);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const paymentInfo = {
    orderType,
    items: cart,
    total: total,
  };

  return (
    <div className={styles.payment}>
      <div className={styles.qrWrapper}>
        <h1>Scan to Pay via UPI</h1>
        <QRCode value={JSON.stringify(paymentInfo)} />

        <i className={styles.customerName}>Praveen Kumar</i>
        <p className={styles.amount}>SEK {total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Payment;
