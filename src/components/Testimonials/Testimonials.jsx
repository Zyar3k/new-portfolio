import React from "react";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
import "./Testimonials.css";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    name: "John Doe",
    avatar: AVATAR1,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit ipsa a accusamus saepe, ratione laboriosam.",
  },
  {
    id: 2,
    name: "Tom Doe",
    avatar: AVATAR2,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit ipsa a accusamus saepe, ratione laboriosam.",
  },
  {
    id: 3,
    name: "Don Joe",
    avatar: AVATAR3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit ipsa a accusamus saepe, ratione laboriosam.",
  },
  {
    id: 4,
    name: "G.I. Jane",
    avatar: AVATAR4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit ipsa a accusamus saepe, ratione laboriosam.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, name, avatar, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar 1" />
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
