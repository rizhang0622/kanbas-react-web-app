// src/Kanbas/store.ts
import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer"; // Import the account reducer

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer, // Add account reducer
  },
});

export default store;
