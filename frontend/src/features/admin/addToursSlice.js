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

      const res = await axios.post(`${backendURL}/api/tours/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          admintoken: adminToken, // for authAdmin middleware
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const listTours = createAsyncThunk(
  "tour/fetchTours",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const adminToken = state.admin.adminToken;
      const res = await axios.get(`${backendURL}/api/tours/list`, {
        headers: { admintoken: adminToken },
      });
      // console.log(res.data)
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteTour = createAsyncThunk(
  "tour/delete",
  async (tourId, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const adminToken = state.admin.adminToken;
      const res = await axios.delete(
        `${backendURL}/api/tours/delete/${tourId}`,
        { headers: { adminToken: adminToken } }
      );
      return res.data
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
    tours: [],
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
      })
      .addCase(listTours.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(listTours.fulfilled, (state, action) => {
        state.loading = false;
        state.tours = action.payload.tours; // store tours from backend
      })
      .addCase(listTours.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTour.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTour.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        // remove deleted tour from state
        state.tours = state.tours.filter(
          (tour) => tour._id !== action.payload.tourId
        );
      })
      .addCase(deleteTour.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default tourSlice.reducer;
