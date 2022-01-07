import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <h1 className="title-footer">
          Conoce más acerca <br></br> de nosotros
        </h1>
        <button className="btn-click-footer">¡Haz click aquí!</button>
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        className="derechos-footer"
        href="https://atento.com/es/politica-de-privacidad/">
        <h2>Derechos reservados 2021</h2>
      </a>
    </div>
  );
}

export default Footer;
