import { configureStore } from "@reduxjs/toolkit";
import { postlistApi } from "../dom/postlistapi";
export const store = configureStore({
  reducer: {
     
      [postlistApi.reducerPath]: postlistApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postlistApi.middleware),
});