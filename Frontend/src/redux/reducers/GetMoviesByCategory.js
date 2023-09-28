import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovieByCategory = createAsyncThunk(
  "MovieByCategory/getMovieByCategory",
  async (name = null, { rejectedWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:1337/api/movies?filters[movie_category][$contains]=${name}&populate=*`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectedWithValue(err.message);
    }
  }
);
export const FilterMovieByYear = createAsyncThunk(
  "MovieByCategory/FilterMovieByYear",
  async (year = null, { rejectedWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:1337/api/movies?filters[movie_year][$eq]=${year}&populate=*`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectedWithValue(err.message);
    }
  }
);

const MovieByCategory = createSlice({
  name: "MovieByCategory",
  initialState: { isLoading: null, isError: null, data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieByCategory.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = [];
    });
    builder.addCase(getMovieByCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(getMovieByCategory.rejected, (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
      state.data = [];
    });
    builder.addCase(FilterMovieByYear.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = [];
    });
    builder.addCase(FilterMovieByYear.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(FilterMovieByYear.rejected, (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
      state.data = [];
    });
  },
});

export default MovieByCategory.reducer;
