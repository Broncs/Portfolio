import React from "react";
import { Link } from "react-router-dom";

const Success = ({ setFormSubmit }) => {
  return (
    <div className="success-page">
      <div className="container">
        <div className="wrapper-1">
          <div className="wrapper-2">
            <h1>Obrigado!</h1>
            <p>Obrigado por entrar em contato. </p>
            <p>Irei responder o mais rapido possivel.</p>
            <Link
              className="btn go-home"
              to="/"
              onClick={() => setFormSubmit(false)}
            >
              Voltar
            </Link>
          </div>
        </div>

        {/* <h2>Obrigado por entrar em contato</h2>
        <Link to="/" onClick={() => setFormSubmit(false)}>
          go back home
        </Link> */}
      </div>
    </div>
  );
};

export default Success;
