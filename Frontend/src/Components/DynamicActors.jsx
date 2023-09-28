import { useParams } from "react-router-dom";
import { useLayoutEffect } from "react";
import { getActorsById } from "../redux/reducers/GetActorsById";
import { useDispatch, useSelector } from "react-redux";

export default function DynamicActors() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useLayoutEffect(() => {
    dispatch(getActorsById(id));
  }, [dispatch]);
  const { data } = useSelector((state) => state.ActorsById);
  return (
    <div className="mt-4 h-screen">
      <div className="container m-auto">
        <h2>Actor Details</h2>
        <div className="actor mt-4 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 h-screen">
          <img
            src={`http://localhost:1337${data?.data?.attributes?.actor_image?.data?.attributes?.url}`}
            alt={data?.data?.attributes?.actor_name}
            loading="lazy"
            className="w-full rounded"
          />
          <div className="info ms-4">
            <h3 className="text-xl text-black dark:text-white">
              {data?.data?.attributes?.actor_name}
            </h3>
            <p className="text-lg mt-3 text-black dark:text-white">
              {data?.data?.attributes?.actor_dec}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
