import React from "react";
import Nav from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import "../../pages/about/about.scss";
import { Link } from "react-router-dom";
import "./error.scss";

const Error: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="error-page">
        <h1 className="error-title">404</h1>
        <p className="error-message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="error-link">
          Retourner sur la page d’accueil
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error;
