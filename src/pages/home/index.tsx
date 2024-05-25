import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import { orderTypeAtom } from "../../atoms/atoms";
import "./home.css";

const Home = () => {
  const [orderType, setOrderType] = useAtom(orderTypeAtom);
  const navigate = useNavigate();

  const handleOrderType = (type: "Eat In" | "Take Away") => {
    setOrderType(type);
    navigate("/categories");
  };

  return (
    <div className="dine-type-container">
      <h2>How would you like to dine?</h2>
      <div className="dine-type-btns">
        <div className="dine-type" onClick={() => handleOrderType("Eat In")}>
          <span>🍽</span>
          <b>Eat In</b>
        </div>
        <div className="dine-type" onClick={() => handleOrderType("Take Away")}>
          <span>🥡</span>
          <b>Take Away</b>
        </div>
      </div>
    </div>
  );
};

export default Home;
