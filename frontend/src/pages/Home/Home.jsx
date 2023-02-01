import NavBar from "@components/NavBar/NavBar";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <h1 className="home-title">Bienvenue sur 'Se Salir les doigts'</h1>
      <div className="home-presentation">
        <p className="home-presentation">
          Moi c'est priscillia, une maman, un brin fofolle, pétillante et
          passionnée de dessin.{" "}
        </p>
        <p className="home-presentation">
          Chaque jour, après l'école, mes enfants sortent leurs crayons de
          couleur et leur papier, et se mettent à dessiner des mondes
          fantastiques remplis de couleurs et de formes étonnantes.
        </p>

        <p className="home-presentation">
          Ce site est dédié à vous offrir des idées d'activités amusantes et
          créatives à faire avec vos enfants.
        </p>
        <p className="home-presentation">
          Laissez votre imagination et votre créativité s'exprimer !
        </p>
        <p className="home-presentation">
          Rejoignez moi dans mon monde et découvrez des activités inoubliables à
          partager avec vos enfants.
        </p>
      </div>
    </div>
  );
}
