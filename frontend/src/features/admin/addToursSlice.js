import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const backendURL = import.meta.env.VITE_BACKEND_URL;

// Async Thunk for adding a tour
export const addTour = createAsyncThunk(
  "tour/addTour",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const adminToken = state.admin.adminToken; // assuming adminToken is stored in admin slice

      const res = await axios.post(
        `${backendURL}/api/tours/add`, 
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            adminToken: adminToken, // for authAdmin middleware
          }
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const tourSlice = createSlice({
  name: "tour",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTour.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTour.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(addTour.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default tourSlice.reducer;
