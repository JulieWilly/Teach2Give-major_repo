import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { GrNext } from "react-icons/gr";
import Heros from "./pages/Heros";
import "./App.css";
import { RxReload } from "react-icons/rx";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
const App = () => {
  const [quote, setQuote] = useState("");
  const [isLoading, setLoading] = useState(false);

  const advices = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://api.adviceslip.com/advice");
      let adviceData = await response.json();
      // console.log(adviceData);
      setQuote(adviceData.slip.advice);
      setLoading(false);
    } catch (error) {
      console.log(`this is the error ${error}`);
    }
  };

  useEffect(() => {
    advices();
  }, []);

  return (
    <div>
      <Header />
      <Heros />
      <div className="advice">
        <p className="advice-text">
          <RiDoubleQuotesL className="quotes" />
          {quote}
          <RiDoubleQuotesR className="quotes" />
        </p>
        {isLoading ? <p>{<RxReload className="reload" />}</p> : null}

        <button onClick={advices}>
          Next Quote
          <GrNext className="next" />
        </button>
      </div>
    </div>
  );
};

export default App;
