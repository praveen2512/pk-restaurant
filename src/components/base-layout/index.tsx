import { Outlet } from "react-router-dom";

import Header from "./header";
// import Footer from "./footer";
import styles from "./styles.module.css";

const Layout = () => {
  return (
    <div className={styles.siteWrapper}>
      <Header />
      <div className={styles.outlet}>
        <main>
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
