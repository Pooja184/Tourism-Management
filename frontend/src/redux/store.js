import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../features/user/userSlice.js";
import adminReducer from "../features/admin/adminSlice.js";

export const store = configureStore({
  reducer: {
    user:userReducer,
    admin:adminReducer
  },
})