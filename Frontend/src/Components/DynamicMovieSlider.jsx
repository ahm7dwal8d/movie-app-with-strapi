import CustomSlider from "./CustomSlider";
import SliderHead from "./CustomHead";
import { useState } from "react";

export default function DynamicMovieSlider({ cate }) {
  const [counte, setCounte] = useState(0);
  return (
    <div className="p-4">
      <SliderHead name={cate} length={counte} />
      <CustomSlider cate={cate} counte={setCounte} />
    </div>
  );
}
