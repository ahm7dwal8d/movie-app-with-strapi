import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMovieById } from "../redux/reducers/GetMovieById";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ImageSlider from "./ImageSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import CustomCategory from "./CustomCategory";

export default function DynamicMovies({ id }) {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(GetMovieById(id));
  }, []);
  const { data } = useSelector((state) => state.MovieById);
  console.log(data);
  return (
    <div className="mt-4">
      <div className="container m-auto">
        <img
          src={`http://localhost:1337${data?.data?.attributes?.movie_bg?.data?.attributes?.url}`}
          alt={data?.data?.attributes?.movie_title}
          className="w-full  rounded"
        />
        <h4 className="mt-4 text-lg text-black dark:text-white">
          {data?.data?.attributes?.movie_title}
        </h4>
        <CustomCategory data={data} />
        <h4 className="text-black dark:text-white">
          {data?.data?.attributes?.movie_rate} <FontAwesomeIcon icon={faStar} />
        </h4>
        <p className="mt-6 mb-4">
          <h2 className="text-lg text-black dark:text-white">
            {`${data?.data?.attributes?.movie_title} Story`} :
          </h2>
          <p className="text-black dark:text-white">
            {data?.data?.attributes?.movie_dec}
          </p>
        </p>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          autoplay
          loop
        >
          {data?.data?.attributes?.movie_images?.data?.map((el) => {
            return (
              <SwiperSlide key={el.id}>
                <ImageSlider data={el} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
