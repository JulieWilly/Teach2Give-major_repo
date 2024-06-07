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
  const [isLoading, setLoading] = useState(true);
 
  const [inputValue, setInputValue] = useState("");
  // const [searchQuote, setSearchQuote] = useState('')

  const advices = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.adviceslip.com/advice`
      );
      let adviceData = await response.json();
      console.log(adviceData);
      setQuote(adviceData.slip.advice);
      // console.log(adviceData)
      setLoading(false);
    } catch (error) {
      console.log(`this is the error ${error}`);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  let responseAdvice=new Map();
  // const SearchAdvice = async (event) => {
  //   try {
  //     setLoading(true);

  //     const response = await fetch(
  //       `https://api.adviceslip.com/advice/search/${inputValue}`
        
  //     );
  //     responseAdvice = await response.json();
  //     console.log(responseAdvice);
  //     // setSearchQuote(responseAdvice);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(`this is the error ${error}`);
  //   }
  // }


  

  useEffect(() => {
    advices();
    // SearchAdvice()

  }, []);

  return (
    <div>
      <Header />
      <Heros />

      <div className="advice">
        <div className="search_sect">
          {/* <input type="text" value={inputValue} onChange={handleInputChange} /> */}
          {/* {searchQuote && searchQuote.slips && (
            <div>
              <h1>Advice on "{searchQuote.query}"</h1>
              <ul>
                {searchQuote.slips.map((slip) => (
                  <li key={slip.id}>{slip.advice}</li>
                ))}
              </ul>
            </div>
          )} */}

          {/* <button>Search </button> */}
        </div>
        <div className="quotes_sect">
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
    </div>
  );
};

export default App;
