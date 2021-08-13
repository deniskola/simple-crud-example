import {useState, useEffect} from "react";
import "./App.css";
import QuoteDashboard from "./Components/QuoteDashboard";

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
      <QuoteDashboard quotes={quotes} />
    </div>
  );
}

export default App;
