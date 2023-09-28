import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function SliderItem() {
  return (
    <div className="pt-4 slider relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay
        pagination={{ clickable: true }}
        loop
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="slide-1 slide">
            <div className="container m-auto absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center z-10">
              <h4 className="capitalize text-3xl text-white">
                50 greatest harry potter moments
              </h4>
              <p className="mt-4 text-sm leading-5 px-16">
                To mark the release two weeks ago of the eighth and final movie
                in the series, Robbie Coltrane narrates a countdown of the movie
                franchise's best moments. From Harry's first meeting with Ron
                and Hermione aboard the Hogwarts Express through to magical
                mysteries.
              </p>
              <button className="bg-red-600 capitalize mt-2 hover:outline-white">
                explore more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-2 slide">
            <div className="container m-auto absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center z-10">
              <h4 className="capitalize text-3xl text-white">
                3 Brothas and a Shot a Milk Batman The Long Halloween Part Two
              </h4>
              <p className="mt-4 text-sm leading-5 px-16">
                Everyone thinks that Bob Kane created Batman, but that’s not the
                whole truth. One author makes it his crusade to make it known
                that Bill Finger, a struggling writer, actually helped invent
                the iconic superhero, from concept to costume to the very
                character we all know and love. Bruce Wayne may be Batman’s
                secret identity, but his creator was always a true mystery.
              </p>
              <button className="bg-red-600 capitalize mt-2 hover:outline-white">
                explore more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-3 slide">
            <div className="container m-auto absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center z-10">
              <h4 className="capitalize text-3xl text-white">
                A Little Red Flower
              </h4>
              <p className="mt-4 text-sm leading-5 px-16">
                The film tells a warm and realistic story, thinking and facing
                the ultimate problem that every ordinary person will
                face-imagining that death may come at any time, the only thing
                we have to do is love and cherish.
              </p>
              <button className="bg-red-600 capitalize mt-2 hover:outline-white">
                explore more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-4 slide">
            <div className="container m-auto absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center z-10">
              <h4 className="capitalize text-3xl text-white">Splinter Cell</h4>
              <p className="mt-4 text-sm leading-5 px-16">
                Based on the popular Tom Clancy video game series
              </p>
              <button className="bg-red-600 capitalize mt-2 hover:outline-white">
                explore more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-5 slide">
            <div className="container m-auto absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center z-10">
              <h4 className="capitalize text-3xl text-white">The Imaginary</h4>
              <p className="mt-4 text-sm leading-5">
                Meet Rudger, the boy created by the imagination of a girl who
                lost love. They spend precious time together, running through a
                world of breathtaking imagination and a challenging reality. One
                day that world of imagination is about to disappear with the
                arrival of a mysterious man seeking to destroy Rudger.
              </p>
              <button className="bg-red-600 capitalize mt-2 hover:outline-white">
                explore more
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
