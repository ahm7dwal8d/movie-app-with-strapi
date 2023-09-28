import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Index";
import NavBar from "./Components/NavBar";
import NotFound from "./Components/NotFound";
import DynamicRoutes from "./Pages/DynamicRoutes";
import "./App.css";
import AllMoviesByYears from "./Pages/GetAllMovies";
import Categories from "./Pages/Category";
import MoviesFromCategory from "./Components/MoviesFromCategory";
import DynamicActors from "./Components/DynamicActors";
import Login from "./Pages/Login";
import Resiger from "./Pages/Resiger";
import Actors from "./Pages/Actors";
import MovivesSearch from "./Pages/MoviesSearch";
import CustomLoading from "./Components/CustomLoading";
import { useSelector } from "react-redux";
import { useLayoutEffect } from "react";
function App() {
  const { theme } = useSelector((state) => state.Theme);
  useLayoutEffect(() => {
    document.documentElement.classList.add(localStorage.getItem("theme"));
    localStorage.setItem("theme", theme);
  }, []);
  return (
    <div
      className={`app bg-white dark:bg-slate-800 transition-all dark:h-full`}
    >
      <BrowserRouter>
        <NavBar />
        <CustomLoading />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/:name" element={<MovivesSearch />} />
          <Route path="/Search/:id" element={<DynamicRoutes />} />
          <Route path="/Resiger" element={<Resiger />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Actors" element={<Actors />} />
          <Route path="/Actors/:id" element={<DynamicActors />} />
          <Route path="/AllMoviesByYear" element={<AllMoviesByYears />} />
          <Route path="/DynamicRoutes/:id" element={<DynamicRoutes />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/Category/:name" element={<MoviesFromCategory />} />
          <Route path="/Category/:name/:id" element={<DynamicRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
