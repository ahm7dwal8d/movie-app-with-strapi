import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk(
  "MoviesSlice/GetMovies",
  async (_, { rejectedWithValue }) => {
    try {
      const res = await fetch(
        "http://localhost:1337/api/movies?populate=*&pagination[pageSize]=1000"
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectedWithValue(err.message);
    }
  }
);

const MoviesSlice = createSlice({
  name: "MoviesSlice",
  initialState: { isLoading: null, isError: null, data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.data = [];
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
      state.data = [];
    });
  },
});

export default MoviesSlice.reducer;
