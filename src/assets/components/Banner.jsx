import "../../styles/Banner.scss";
import Button from "../components/Button";

// Archivo de estilos para el banner

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="img-fondo"></div>
        <p>TEXTO PREVIO AL TITULO</p>
        <h1>
          Título banner <br></br>principal
        </h1>
        <Button />
      </div>
    </div>
  );
};

export default Banner;
