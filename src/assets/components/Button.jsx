// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../../styles/Button.scss"; // Asegúrate de que la ruta al archivo CSS sea correcta

const Button = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      type="button"
      className="custom-button"
      aria-pressed={isActive}
      onClick={handleClick}
    >
      Enviar
    </button>
  );
};

export default Button;
