import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const backendURL = import.meta.env.VITE_BACKEND_URL;

export const registerUser = createAsyncThunk(
  "user/register",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post(
        `${backendURL}/api/user/user-register`,
        formData
      );
      return res.data;
    } catch (err) {
      // console.log(`${backendURL}/api/user/user-register`);
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Something went wrong while registering"
      );
    }
  }
);

// Login User
export const loginUser = createAsyncThunk(
  "user/login",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post(
        `${backendURL}/api/user/user-login`,
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



const userSlice = createSlice({
  name: "user",

  initialState: {
   user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  userToken: localStorage.getItem("userToken") || null,
  loading: false,
  error: null,
  },
  reducers: {
    userLogout: (state) => {
      state.user = null;
      state.userToken = null;
      localStorage.removeItem("userToken");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userToken = action.payload.userToken;
        state.user = action.payload.user;
        localStorage.setItem("userToken", action.payload.userToken);
        localStorage.setItem("user", JSON.stringify(action.payload.user));

      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userToken = action.payload.userToken;
        state.user = action.payload.user;
        if (action.payload.userToken) {
          localStorage.setItem("userToken", action.payload.userToken);
        }

        if (action.payload.user) {
          localStorage.setItem("user", JSON.stringify(action.payload.user));
        } else {
          // Optional: clear invalid user from localStorage
          localStorage.removeItem("user");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
