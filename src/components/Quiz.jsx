import "../App.css";
import { useEffect, useState, useContext } from "react";
import { randomRange } from "../utils/random";
import { useNavigate } from "react-router";
import ResultsContext from "../contexts/ResultsContext";

const QuizPage = () => {
  // Variable pour le numéro que le joueur choisi initialisé à 0
  const [userNumber, setUserNumber] = useState(0);
  // Variable pour stocker "c'est plus & c'est moins"
  const [helpIndication, setHelpIndication] = useState("");
  // Variable pour rediriger l'utilisateur en cas de victoire.
  const navigate = useNavigate();
  // j'appelle mon useContext pour récupérer
  // mes valeurs counter et randomNumber
  const { setCounter, counter, randomNumber, setRandomNumber } =
    useContext(ResultsContext);

  // Création d'un useEffect pour choisir le numéro au chargement de la page.
  useEffect(() => {
    setRandomNumber(randomRange(0, 100));
  }, []);

  console.log(randomNumber);

  // Création d'une fonction pour le bouton qui au click :
  // Va incrémenter le counter de 1
  // Va comparer le userNumber avec le randomNumber
  // Si userNumber = randomNumber alors Felicitation
  // Sinon c'est moins ou c'est plus.
  const validateRound = () => {
    setCounter(counter + 1);
    if (userNumber > randomNumber) {
      setHelpIndication("c'est moins ! Essai encore...");
    }
    if (userNumber < randomNumber) {
      setHelpIndication("C'est plus ! Essai encore...");
    }
    if (userNumber == randomNumber) {
      navigate("/result");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") validateRound();

    console.log(e.key);
  };

  return (
    <div className="quiz">
      <div className="quiz__container">
        <label>
          Choisi ton numéro, entre 0 et 100 !
          <input
            className="quiz__container__userNumber"
            type="number"
            value={userNumber}
            // evenement pour activer le entrée sur le input
            onKeyPress={(e) => handleKeyPress(e)}
            // evenement qui enregistre ce que va tape l'utilisateur
            onChange={(e) => setUserNumber(e.target.value)}
          />
        </label>
        {helpIndication}
        <div className="quiz__container__bis">
          <div className="quiz__container__bis__count">{counter}</div>
          <button
            type="button"
            className="quiz__container__bis__button"
            onClick={() => validateRound()}
          >
            Valider le tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
