import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const backendURL = import.meta.env.VITE_BACKEND_URL;

export const registerAdmin = createAsyncThunk(
  "admin/register",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post(
        `${backendURL}/api/admin/admin-register`,
        formData
      );
      return res.data;
    } catch (err) {
      console.log(`${backendURL}/api/admin/admin-register`);
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Something went wrong while registering"
      );
    }
  }
);

// Login User
export const loginAdmin = createAsyncThunk(
  "admin/login",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post(
        `${backendURL}/api/admin/admin-login`,
        formData
      );
      console.log(res.data)
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Something went wrong while login"
      );
    }
  }
);



const adminSlice = createSlice({
  name: "admin",

  initialState: {
   admin: localStorage.getItem("admin")
    ? JSON.parse(localStorage.getItem("admin"))
    : null,
  token: localStorage.getItem("adminToken") || null,
  loading: false,
  error: null,
  },
  reducers: {
    adminLogout: (state) => {
      state.admin = null;
      state.token = null;
      localStorage.removeItem("adminToken");
      localStorage.removeItem("admin");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.admin = action.payload.admin;
        localStorage.setItem("adminToken", action.payload.token);
        localStorage.setItem("admin", JSON.stringify(action.payload.admin));

      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.admin = action.payload.admin;
        if (action.payload.token) {
          localStorage.setItem("adminToken", action.payload.token);
        }

        if (action.payload.admin) {
          localStorage.setItem("admin", JSON.stringify(action.payload.admin));
        } else {
          // Optional: clear invalid user from localStorage
          localStorage.removeItem("admin");
        }
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { adminLogout } = adminSlice.actions;
export default adminSlice.reducer;
