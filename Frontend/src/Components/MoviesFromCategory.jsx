import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { getMovieByCategory } from "../redux/reducers/GetMoviesByCategory";
import AutoCompleteCategory from "./CustomAutoComplete";
import CustomFilter from "./CustomFilter";

export default function MoviesFromCategory() {
  const dispatch = useDispatch();
  const { name } = useParams();
  useLayoutEffect(() => {
    dispatch(getMovieByCategory(name));
  }, []);
  const { data } = useSelector((state) => state.GetMoviesByCategory);
  return (
    <div className="py-4">
      <div className="container m-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">{name}</h2>
          <CustomFilter />
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-6">
          {data?.data?.map((el) => {
            // console.log(el);
            return (
              <div
                className="me-2 text-black dark:text-white mt-4 relative"
                key={el.id}
              >
                <img
                  src={`http://localhost:1337${el?.attributes?.movie_bg?.data?.attributes?.url}`}
                  alt={el?.attributes?.movie_title}
                  className="w-full rounded"
                  loading="lazy"
                />
                <h4 className="mt-4">{el?.attributes?.movie_title}</h4>
                <h4 className="mt-1 opacity-60">
                  {el?.attributes?.movie_year}
                </h4>
                {el?.attributes?.movie_category?.map((el) => {
                  return (
                    <span className="opacity-60 me-4 border p-1 rounded my-3 inline-block hover:opacity-100 transition-all text-black dark:text-white">
                      {el}
                    </span>
                  );
                })}
                <p className="mt-4">{el?.attributes?.movie_dec}</p>
                {el?.attributes?.actors?.data?.map((el) => {
                  return (
                    <Link
                      to={`/Actors/${el.id}`}
                      className="opacity-60 me-4 border p-1 rounded my-3 inline-block hover:opacity-100 transition-all text-black dark:text-white"
                    >
                      {el?.attributes?.actor_name}
                    </Link>
                  );
                })}
                <Link
                  className="text-black dark:text-white opacity-70 hover:opacity-100 transition-all absolute top-2 right-2"
                  to={`/Category/${name}/${el.id}`}
                >
                  Details
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
