import NavBar from "@components/NavBar/NavBar";
import SwiperActivities from "@components/SwiperActivities/SwiperActivities";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper as SwiperComponent } from "swiper/react";
import Footer from "@components/Footer/Footer";
import Title from "@components/Title/Title";
import encours from "../../assets/encours.png";
import "./ete.scss";

export default function Ete() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/activitiesSummer`).then(({ data }) => {
      setActivities(data);
    });
  }, []);
  return (
    <div>
      <NavBar />
      <Title />
      <h1 className="title-summer">En été</h1>
      <div>
        {activities.length !== 0 ? (
          <SwiperComponent>
            <SwiperActivities activities={activities} />
          </SwiperComponent>
        ) : (
          <div className="ete-contruction">
            <p className="ete-contruction">Page en construction</p>
            <img className="img-contruction" src={encours} alt="travaux" />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
