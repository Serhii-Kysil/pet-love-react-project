import { createSlice } from "@reduxjs/toolkit";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesSlice = createSlice({
  name: "notices",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder;
  },
});

const noticesReducer = noticesSlice.reducer;
export default noticesReducer;
