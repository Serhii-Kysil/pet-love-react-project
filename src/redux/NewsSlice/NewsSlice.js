import { createSlice } from "@reduxjs/toolkit";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const newsSlice = createSlice({
  name: "news",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder;
  },
});

const newsReducer = newsSlice.reducer;
export default newsReducer;
