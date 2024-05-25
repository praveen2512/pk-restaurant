import axios from "axios";

export const fetchCategories = async () => {
  try {
    const res = await axios.get("/api/categories");
    return res.data?.data || [];
  } catch (error) {
    console.error("Error while fetching Categories", error);
  }
};

export const fetchProducts = async (category: string) => {
  try {
    const res = await axios.get(`/api/products?category=${category}`);
    return res.data?.data || [];
  } catch (error) {
    console.error("Error while fetching Products", error);
  }
};
