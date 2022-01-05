import ContactosCss from "./Contactos.css";
import Mes from "./iconos/atobot.png";
import Whatsapp from "./iconos/whatsapp.png";
import Phone from "./iconos/phonenumber.png";
import Facebook from "./iconos/facebook.png";
import Twitter from "./iconos/twitter.png";
import Instagram from "./iconos/instagram.png";
import Tiktok from "./iconos/tik-tok.png";
import Youtube from "./iconos/youtube.png";

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
