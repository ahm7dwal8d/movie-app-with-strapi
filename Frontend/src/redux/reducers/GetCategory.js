import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategory = createAsyncThunk(
  "Category/GetCategory",
  async (_, { rejectedWithValue }) => {
    try {
      const res = await fetch(
        "http://localhost:1337/api/categories?populate=*"
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectedWithValue(err.message);
    }
  }
);

const CategorySlice = createSlice({
  name: "Category",
  initialState: { isLoading: null, isError: null, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = [];
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
      state.data = [];
    });
  },
});

export default CategorySlice.reducer;
