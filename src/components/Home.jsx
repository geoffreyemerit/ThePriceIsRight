import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title"> LE JUSTE PRIX </h1>
      <Link to="/quiz">
        <button type="button" className="home__button">
          Commencer le Jeu !
        </button>
      </Link>
    </div>
  );
};

export default Home;
