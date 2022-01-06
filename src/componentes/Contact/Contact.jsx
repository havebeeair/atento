import "./Contact.css";
import Mes from "../../resources/iconos/atobot.png";
import Whatsapp from "../../resources/iconos/whatsapp.png";
import Phone from "../../resources/iconos/phonenumber.png";
import Facebook from "../../resources/iconos/facebook.png";
import Twitter from "../../resources/iconos/twitter.png";
import Instagram from "../../resources/iconos/instagram.png";
import Tiktok from "../../resources/iconos/tik-tok.png";
import Youtube from "../../resources/iconos/youtube.png";

function Contactos() {
  return (
    <div className="Contactos">
      <h1 className="titulo-contactos">Contáctanos</h1>
      <div className="carta-contactos">
        <img width="70px" src={Mes} alt="atobot" />
        <div>Atobot</div>
      </div>
      <div className="carta-contactos">
        <img width="70px" src={Whatsapp} alt="whatsapp" />
        <div>Whatsapp</div>
      </div>
      <div className="carta-contactos">
        <img className="orange" width="70px" src={Phone} alt="phone number" />
        <div>800-214-1010</div>
      </div>
      <div className="creando-container">
        <h1 className="titulo-creando">Creando interacciones</h1>
        <div className="iconos-container">
          <img width="70px" src={Facebook} alt="facebook" />
          <img className="white" width="70px" src={Twitter} alt="twitter" />
          <img width="70px" src={Instagram} alt="instagram" />
          <img width="70px" src={Tiktok} alt="tiktok" />
          <img width="70px" src={Youtube} alt="youtube" />
        </div>
      </div>
    </div>
  );
}

export default Contactos;
