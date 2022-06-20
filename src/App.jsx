import "./App.css";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import ResultsContextProvider from "./contexts/ResultsContextProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResultsContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </ResultsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
