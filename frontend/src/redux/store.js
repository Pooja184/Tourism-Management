import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../features/user/userSlice.js";
import adminReducer from "../features/admin/adminSlice.js";
import tourReducer from "../features/admin/addToursSlice.js";
import allToursReducer from "../features/user/tours.js";

export const store = configureStore({
  reducer: {
    user:userReducer,
    admin:adminReducer,
    tour:tourReducer,
    allTours:allToursReducer,
  },
})