import { getMovieByCategory } from "../redux/reducers/GetMoviesByCategory";
import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function CustomSlider({ cate, counte }) {
  const [data, setData] = useState({});
  async function getMovie(name) {
    const res = await fetch(
      `http://localhost:1337/api/movies?filters[movie_category][$contains]=${name}&populate=*`
    );
    const data = await res.json();
    setData(data);
    counte(data?.data.length);
  }
  useLayoutEffect(() => {
    getMovie(cate);
  }, []);
  return (
    <div className="mt-4">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        autoplay
        loop
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data?.data?.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <Link
                className="text-white hover:text-white"
                to={`/DynamicRoutes/${el.id}`}
                key={el.id}
              >
                <MovieCard data={el} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
