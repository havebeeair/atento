import "./Contact.css";
import Mes from "../../resources/iconos/atobot.png";
import Whatsapp from "../../resources/iconos/whatsapp.png";
import Phone from "../../resources/iconos/phonenumber.png";
import Facebook from "../../resources/imagenes/social/facebook.png";
import Twitter from "../../resources/iconos/twitter.png";
import Instagram from "../../resources/imagenes/social/instagram.png";
import Tiktok from "../../resources/imagenes/social/tiktok.png";
import Linkedin from "../../resources/iconos/linkedin.png";

function Contactos() {
  return (
    <div id="contactos" className="Contactos">
      <h1 className="titulo-contactos" id="contactos">
        Contáctanos
      </h1>
      <a className="nounderline" href="m.me/TalentoAtentoMx">
        <div className="carta-contactos">
          <img width="70px" src={Mes} alt="atobot" />
          <div>Atobot</div>
        </div>
      </a>
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
        <h3>¡Síguenos en nuestras redes sociales oficiales!</h3>
        <div className="iconos-container">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/TalentoAtentoMx">
            <img width="70px" src={Facebook} alt="facebook" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/TalentoAtentoMx">
            <img width="70px" src={Twitter} alt="twitter" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/talentoatentomx/">
            <img width="70px" src={Instagram} alt="instagram" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.tiktok.com/@talentoatentomx?lang=es">
            <img width="70px" src={Tiktok} alt="tiktok" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/company/atento-m-xico/">
            <img width="70px" src={Linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contactos;
