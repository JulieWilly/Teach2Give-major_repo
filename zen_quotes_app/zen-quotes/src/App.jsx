import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Heros from "./pages/Heros";
import './App.css'

const App = () => {
const [quote, setQuote] = useState("");

const advices = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice")
    let adviceData = await response.json();
    // console.log(adviceData);
    setQuote(adviceData.slip.advice);
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
        <p className="advice-text">{quote}</p>
        <button onClick={advices}>click me</button>
      </div>
    </div>
  );
};

export default App;
