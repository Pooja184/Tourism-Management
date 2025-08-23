import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const backendURL = import.meta.env.VITE_BACKEND_URL;

// Async Thunk for adding a tour


export const getAllTours=createAsyncThunk(
  "tour/fetchTours",
  async (_,{rejectWithValue})=>{
    try {
      const res=await axios.get(`${backendURL}/api/tours/alltours`);
    //   console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response?.data || error.message);
    }
  }
)
const allTourSlice = createSlice({
  name: "allTours",
  initialState: {
    loading: false,
    success: false,
    error: null,
    tours:[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(getAllTours.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getAllTours.fulfilled, (state, action) => {
      state.loading = false;
      state.tours = action.payload.allToursData; // store tours from backend
    })
    .addCase(getAllTours.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default allTourSlice.reducer;
