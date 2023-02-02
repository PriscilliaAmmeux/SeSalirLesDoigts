import { RiInstagramFill } from "react-icons/ri";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <a className="link" href="https://www.instagram.com/se_salir_les_doigts/">
        Rejoignez moi sur Instagram {RiInstagramFill}
      </a>

      <div>Checkpoint 4 - WCS</div>
      <div>Copyright 2023 - Tous droits réservés.</div>
    </div>
  );
}
