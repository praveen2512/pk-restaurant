// mockData/index.ts
import { MockMethod } from "vite-plugin-mock";
import { categories, products } from "./mock";

export default [
  {
    url: "/api/categories",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: categories,
      };
    },
  },
  {
    url: "/api/products",
    method: "get",
    response: ({ query }: { query: { category: string } }) => {
      const category = query.category;
      const data = products;
      return {
        code: 200,
        data: data[category] || [],
      };
    },
  },
] as MockMethod[];
