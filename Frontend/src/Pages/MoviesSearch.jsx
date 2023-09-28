import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetMovieBySearch } from "../redux/reducers/GetMovieBySearch";
import { useLayoutEffect } from "react";
import DynamicMoviesSearch from "../Components/DynamicMoviesSearch";

export default function MovivesSearch() {
  const dispatch = useDispatch();
  const { name } = useParams();
  useLayoutEffect(() => {
    dispatch(GetMovieBySearch(name));
  }, []);
  const { data } = useSelector((state) => state.MovieBySearch);
  return (
    <div className="py-6">
      <h1 className="ms-6 capitalize">{name}</h1>
      <div className="container m-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {data?.data?.map((el) => {
          return <DynamicMoviesSearch data={el} key={el.id} />;
        })}
      </div>
    </div>
  );
}
