import { configureStore } from "@reduxjs/toolkit";
import Movies from "./reducers/GetMovies";
import Category from "./reducers/GetCategory";
import MovieById from "./reducers/GetMovieById";
import Actors from "./reducers/GetActors";
import GetMoviesByCategory from "./reducers/GetMoviesByCategory";
import ActorsById from "./reducers/GetActorsById";
import MovieBySearch from "./reducers/GetMovieBySearch";
import Theme from "./reducers/Theme";
export const store = configureStore({
  reducer: {
    Movies,
    Category,
    MovieById,
    Actors,
    GetMoviesByCategory,
    ActorsById,
    MovieBySearch,
    Theme,
  },
});
