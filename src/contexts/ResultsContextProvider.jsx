import { useState } from "react";
import ResultsContext from "./ResultsContext";

const ResultsContextProvider = ({ children }) => {
  // Variable pour stocker le nombre de tour initialisé à 0
  const [counter, setCounter] = useState(1);
  // Variable pour stocker le numéro aléatoire de la partie.
  const [randomNumber, setRandomNumber] = useState(0);

  return (
    <ResultsContext.Provider
      value={{ counter, setCounter, randomNumber, setRandomNumber }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;
