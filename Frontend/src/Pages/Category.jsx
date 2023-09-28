import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect, useState } from "react";
import { getCategory } from "../redux/reducers/GetCategory";
import CategoryCard from "../Components/CategoryCard";
import Loading from "../Components/loading";

export default function Categories() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getCategory());
  }, []);
  const { data } = useSelector((state) => state.Category);
  return (
    <div className="mt-4">
      <div className="container m-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {data?.data?.map((el) => {
          return <CategoryCard data={el} key={el.id} />;
        })}
      </div>
    </div>
  );
}
