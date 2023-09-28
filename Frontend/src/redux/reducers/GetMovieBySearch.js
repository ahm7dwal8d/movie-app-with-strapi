import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const GetMovieBySearch = createAsyncThunk(
  "MovieBySearch/GetMovieBySearch",
  async (name, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:1337/api/movies?filters[movie_title][$contains]=${name}&populate=*`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const MovieBySearch = createSlice({
  name: "MovieBySearch",
  initialState: { isLoading: null, isError: null, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetMovieBySearch.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.data = null;
    });
    builder.addCase(GetMovieBySearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(GetMovieBySearch.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
      state.data = null;
    });
  },
});

export default MovieBySearch.reducer;
