import NavBar from "@components/NavBar/NavBar";
import "./printemps.scss";
// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";
// /* eslint-disable import/no-unresolved */
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// /* eslint-enable import/no-unresolved */
// import "./Swiper.scss";

export default function Printemps() {
  // const { activities, setActivities } = useState([]);
  // useEffect(() => {
  //   setActivities(activities);
  // }, []);
  return (
    <div>
      <NavBar />
      {/* <Swiper
        cssMode
        pagination
        mousewheel
        keyboard
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="my-swiper"
      >
        {activities
          .filter((activity) => )
          .map((activity) => {
            return (
              <SwiperSlide className="home-youtube" key={} id={}> </SwiperSlide>
            );
          })}
      </Swiper> */}
    </div>
  );
}
