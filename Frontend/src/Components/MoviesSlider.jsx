import { useEffect } from "react";
import { getMovies } from "../redux/reducers/GetMovies";
import { useDispatch, useSelector } from "react-redux";
import SliderHead from "./CustomHead";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

export default function MoviesSlider() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getMovies());
  }, []);
  const { data } = useSelector((state) => state.Movies);
  return (
    <div className="movies-slider my-6 p-4">
      <SliderHead name={"Movies"} length={data?.meta?.pagination?.total} />
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
