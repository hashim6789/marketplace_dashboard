import { Routes, Route } from "react-router-dom";
import Products from "../pages/user/Products";
import NotFound from "../pages/NotFound";
import Layout from "../pages/Layout";

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
