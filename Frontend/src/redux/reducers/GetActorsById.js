import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getActorsById = createAsyncThunk(
  "ActorsById/getActorsById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:1337/api/actors/${id}?populate=*`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const ActorsById = createSlice({
  name: "ActorsById",
  initialState: { isLoading: null, isError: null, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getActorsById.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.data = null;
    });
    builder.addCase(getActorsById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(getActorsById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
      state.data = null;
    });
  },
});

export default ActorsById.reducer;
