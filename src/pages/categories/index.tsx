import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { useQuery } from "@tanstack/react-query";

import { selectedCategoryAtom, cartAtom } from "../../atoms/atoms";
import { fetchCategories, fetchProducts } from "../api";

import burger from "../../assets/burger.jpg";
import styles from "./styles.module.css";

const Categories = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);
  const [cart, setCart] = useAtom(cartAtom);

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { data: products } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: () => fetchProducts(selectedCategory!),
    enabled: !!selectedCategory,
  });

  useEffect(() => {
    if (!categories) {
      return;
    }
    setSelectedCategory(categories[0].name);
  }, [categories, setSelectedCategory]);

  const handleAddToCart = (product: any) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (product: any) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.categoryList}>
        {categories?.map(
          (category: any) => (
            <div
              key={category.id}
              className={styles.categoryCard}
              onClick={() => setSelectedCategory(category.name)}
            >
              <img src={burger} alt="burger" className={styles.categoryImage} />
              {category.name}
            </div>
          )
        )}
      </div>
      <div className={styles.productsCatalog}>
        <div className={styles.selectedCategory}>
          <h2>{selectedCategory}</h2>
          <button
            onClick={() => navigate("/review-order")}
            className={cart.length ? styles.checkoutBtn : styles.disabledBtn}
            disabled={!cart.length}
          >
            Checkout ({cart.length})
          </button>
        </div>

        <div className={styles.productList}>
          {products?.map((product: any) => (
            <div key={product.id} className={styles.productCard}>
              <img src={burger} alt="burger" className={styles.productImage} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <div className={styles.productActions}>
                <button
                  onClick={() => handleRemoveFromCart(product)}
                  className={styles.removeBtn}
                >
                  -
                </button>
                <span>
                  {cart.find((item) => item.id === product.id)?.quantity ?? 0}
                </span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={styles.addBtn}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
