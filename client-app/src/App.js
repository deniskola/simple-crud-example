import {useState, useEffect} from "react";
import "./App.css";
import QuoteDashboard from "./Components/QuoteDashboard";
import agent from "./api/agent";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState(undefined);

  useEffect(() => {
    agent.Quotes.list().then((response) => {
      setQuotes(response);
    });
  }, []);

  function handleSelectQuote(id) {
    setSelectedQuote(quotes.find((x) => x.id === id));
  }

  function handleCancelSelectQuote() {
    setSelectedQuote(undefined);
  }
  return (
    <div>
      <QuoteDashboard
        quotes={quotes}
        selectedQuote={selectedQuote}
        selectQuote={handleSelectQuote}
        cancelSelectQuote={handleCancelSelectQuote}
      />
    </div>
  );
}

export default App;
