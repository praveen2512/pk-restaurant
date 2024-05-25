import { useAtomValue } from "jotai";
import { cartAtom } from "../../../atoms/atoms";

import styles from "./styles.module.css";

const Header = () => {
  const cart = useAtomValue(cartAtom);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <footer className={styles.footer}>
      <span>
        {cart.length} Items | {total.toFixed(2)} SEK
      </span>
    </footer>
  );
};

export default Header;
