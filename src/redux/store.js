import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { filterReducer } from "./filter/filterSlice";
import { productsReducer } from "./products/productsSlice";

const productsPersistConfig = {
  key: "root",
  storage,
};

const persistedProductsReducer = persistReducer(
  productsPersistConfig,
  productsReducer
);

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    products: persistedProductsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
