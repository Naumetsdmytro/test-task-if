import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./SharedLayout";

const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Products />} />
        <Route path=":productId" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};
