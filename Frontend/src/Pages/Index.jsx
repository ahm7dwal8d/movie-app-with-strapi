import SliderItem from "../Components/Slider";
import MoviesSlider from "../Components/MoviesSlider";
import DynamicMovieSlider from "../Components/DynamicMovieSlider";

export default function HomePage() {
  return (
    <>
      <SliderItem />
      <MoviesSlider />
      <DynamicMovieSlider cate={"Action"} />
      <DynamicMovieSlider cate={"Drama"} />
      <DynamicMovieSlider cate={"Adventure"} />
      <DynamicMovieSlider cate={"Animation"} />
      <DynamicMovieSlider cate={"Comedy"} />
      <DynamicMovieSlider cate={"Crime"} />
      <DynamicMovieSlider cate={"Family"} />
      <DynamicMovieSlider cate={"Fantasy"} />
      <DynamicMovieSlider cate={"Sports"} />
      <DynamicMovieSlider cate={"War"} />
    </>
  );
}
