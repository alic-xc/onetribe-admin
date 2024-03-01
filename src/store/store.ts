import { configureStore } from "@reduxjs/toolkit";
import { authenticationAPI } from "../services/authenticationAPI";
import { userAPI } from "../services/userAPI";

export default configureStore({
  reducer: {
    [authenticationAPI.reducerPath]: authenticationAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authenticationAPI.middleware,
      userAPI.middleware,
    ]),
});
