import {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  async function fetchQuotes() {
    const response = await fetch("http://localhost:5000/api/quotes");
    const data = await response.json();
    console.log(data);
    setQuotes(data);
  }

  return (
    <div>
      {quotes.map((quote) => {
        return (
          <div key={quote.id}>
            <h1>{quote.paragraph}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
