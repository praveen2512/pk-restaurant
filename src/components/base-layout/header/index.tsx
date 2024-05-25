import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <h1 className={styles.logo} onClick={() => navigate("/")}>
        PK Restaurant
      </h1>
    </header>
  );
};

export default Header;
