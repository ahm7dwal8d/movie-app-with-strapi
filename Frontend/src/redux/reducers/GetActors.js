import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getActors = createAsyncThunk(
  "ActorsSlice/getActors",
  async (_, { rejectedWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:1337/api/actors?populate=*&pagination[pageSize]=1000`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectedWithValue(err.message);
    }
  }
);

const actorSlice = createSlice({
  name: "ActorsSlice",
  initialState: { isLoading: null, isError: null, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getActors.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = null;
    });
    builder.addCase(getActors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(getActors.rejected, (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
      state.data = null;
    });
  },
});

export default actorSlice.reducer;
