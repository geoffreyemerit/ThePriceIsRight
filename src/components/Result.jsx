import { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ResultsContext from "../contexts/ResultsContext";

const Result = () => {
  // j'appelle mon useContext pour récupérer
  // mes valeurs counter et randomNumber
  const { counter, randomNumber } = useContext(ResultsContext);

  return (
    <div className="result">
      <p className="result__congrats">Bravo, t'es un champion !</p>
      <p className="result__congrats">
        Tu as trouvé {randomNumber} en {counter} tours
      </p>
      <Link to="/quiz">
        <button type="button" className="result__replay">
          Recommencer
        </button>
      </Link>
    </div>
  );
};

export default Result;
