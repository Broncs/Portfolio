import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="not-found" style={{ marginTop: "20px" }}>
      <div className="container">
        <h2>Pagina não encontrada! 404</h2>
        <Link className="btn go-home" style={{ marginTop: "20px" }} to="/">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default NoMatch;
