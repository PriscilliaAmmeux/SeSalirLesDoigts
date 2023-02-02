import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";
import PropTypes from "prop-types";
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* eslint-enable import/no-unresolved */
import "./swiperActivities.scss";

function SwiperActivities({ activities }) {
  return (
    <div className="card">
      <Swiper
        slidesPerView={3}
        spaceBetween={8}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          851: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
        className="my-swiper"
      >
        {activities.map((elt) => {
          return (
            <SwiperSlide className="swiper-swiper" key={elt.id_activities}>
              <img className="swiper-image" src={elt.photo} alt={elt.title} />
              <ul>
                <li className="swiper-title">{elt.title}</li>
                <li className="swiper-description">
                  <span className="text-bold">Description :</span>
                  {elt.description}
                </li>
              </ul>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
export default SwiperActivities;

SwiperActivities.propTypes = {
  activities: PropTypes.arrayOf({
    activities: PropTypes.shape({
      id_activities: PropTypes.number,
      photo: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
};
