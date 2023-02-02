import NavBar from "@components/NavBar/NavBar";
import SwiperActivities from "@components/SwiperActivities/SwiperActivities";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper as SwiperComponent } from "swiper/react";
import Footer from "@components/Footer/Footer";
import Title from "@components/Title/Title";
import "./hiver.scss";

export default function Hiver() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/activitiesWinter`).then(({ data }) => {
      setActivities(data);
    });
  }, []);
  return (
    <div>
      <NavBar />
      <Title />
      <h1 className="title-winter">En hiver</h1>
      <SwiperComponent>
        <SwiperActivities activities={activities} />
      </SwiperComponent>
      <Footer />
    </div>
  );
}
