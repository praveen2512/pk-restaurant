import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Categories from "./pages/categories";
import ReviewOrder from "./pages/review-order";
import Payment from "./pages/payment";

import Layout from "./components/base-layout";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/review-order" element={<ReviewOrder />} />
      <Route path="/payment" element={<Payment />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
