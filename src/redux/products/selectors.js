import { createSelector } from "@reduxjs/toolkit";
import {
  selectSearchTextValue,
  selectSortValue,
  selectPriceRangeValue,
} from "redux/filter/selectors";

export const selectProducts = (state) => state.products.products;

export const selectIsLoading = (state) => state.products.isLoading;

export const selectError = (state) => state.products.error;

const selectFilteredProductsByName = createSelector(
  [selectProducts, selectSearchTextValue],
  (products, filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();
    return products.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const selectFilteredProductsByPrice = createSelector(
  [selectFilteredProductsByName, selectPriceRangeValue],
  (products, rangePrice) => {
    if (!rangePrice) {
      return products;
    }
    const { minPrice, maxPrice } = rangePrice;
    return products.filter(
      ({ price }) => Number(price) >= minPrice && Number(price) <= maxPrice
    );
  }
);

const selectSortedProducts = createSelector(
  [selectFilteredProductsByPrice, selectSortValue],
  (products, sortBy) => {
    if (sortBy === "lowToHigh") {
      return products.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      return products.slice().sort((a, b) => b.price - a.price);
    }
    return products;
  }
);

export const selectVisibleProducts = selectSortedProducts;

export const selectSelectedProduct = (state) => state.products.selectedProduct;
