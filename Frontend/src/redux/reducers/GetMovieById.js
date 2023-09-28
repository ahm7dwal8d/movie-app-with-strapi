import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const GetMovieById = createAsyncThunk(
  "MovieById/GetMovieById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:1337/api/movies/${id}?populate=*`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const MovieById = createSlice({
  name: "MovieById",
  initialState: { isLoading: null, isError: null, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetMovieById.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.data = null;
    });
    builder.addCase(GetMovieById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(GetMovieById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
      state.data = null;
    });
  },
});

export default MovieById.reducer;
