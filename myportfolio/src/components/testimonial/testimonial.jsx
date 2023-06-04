import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/Avatar 1.jpg";
import AVTR2 from "../../assets/Avatar 2.jpg";

// import Swiper core and required modules
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const data = [
  {
    avatar: AVTR1,
    name: "Tchinda Sephora",
    review:
      "I was so impressed by the flyers he designed,they were actally used by a tech startup , a feat in its own",
  },
  {
    avatar: AVTR2,
    name: "Nyando",
    review:
      "Two words BIG DEV",
  },
  
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt='avatar' />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;