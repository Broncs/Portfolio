import React from "react";
import { Link } from "react-router-dom";

const Success = ({ setFormSubmit }) => {
  return (
    <div>
      <h2>Obrigado por entrar em contato</h2>
      <Link to="/" onClick={() => setFormSubmit(false)}>
        go back home
      </Link>
    </div>
  );
};

export default Success;
