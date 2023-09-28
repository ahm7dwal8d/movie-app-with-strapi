import { getActors } from "../redux/reducers/GetActors";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActorsCard from "../Components/ActorsCard";

export default function Actors() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getActors());
  }, []);
  const { data } = useSelector((state) => state.Actors);
  return (
    <div className="mt-4">
      <div className="container m-auto">
        <h2>Actors </h2>
        <ActorsCard data={data?.data} />
      </div>
    </div>
  );
}
