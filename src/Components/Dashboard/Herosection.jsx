import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Herosection() {
  return (
    <div className="w-full  mx-auto">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="" alt="Slide 1" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="Slide 2" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="Slide 3" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Herosection;
