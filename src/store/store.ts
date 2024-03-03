import { configureStore } from "@reduxjs/toolkit";
import { authenticationAPI } from "../services/authenticationAPI";
import { userAPI } from "../services/userAPI";
import { productAPI } from "../services/productAPI";

export default configureStore({
  reducer: {
    [authenticationAPI.reducerPath]: authenticationAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authenticationAPI.middleware,
      userAPI.middleware,
      productAPI.middleware,
    ]),
});
