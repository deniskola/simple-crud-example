import {useState, useEffect} from "react";
import "./App.css";
import QuoteDashboard from "./Components/QuoteDashboard";
import agent from "./api/agent";
import {v4 as uuid} from "uuid";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState(undefined);
  const [createMode, setCreateMode] = useState(false);

  console.log(selectedQuote);
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
    setCreateMode(false);
  }

  function handleFormOpen(id) {
    id ? handleSelectQuote(id) : handleCancelSelectQuote();
    setCreateMode(true);
  }

  function handleFormClose() {
    setCreateMode(false);
  }

  function handleCreateOrEditQuote(quote) {
    if (quote.id) {
      agent.Quotes.update(quote).then(() => {
        setQuotes([...quotes.filter((x) => x.id !== quote.id), quote]);
        setSelectedQuote(quote);
        setCreateMode(false);
      });
    } else {
      quote.id = uuid();
      agent.Quotes.create(quote).then(() => {
        setQuotes([...quotes, quote]);
        setSelectedQuote(quote);
        setCreateMode(false);
      });
    }
  }
  return (
    <div>
      <QuoteDashboard
        quotes={quotes}
        selectedQuote={selectedQuote}
        selectQuote={handleSelectQuote}
        cancelSelectQuote={handleCancelSelectQuote}
        createMode={createMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
        createOrEdit={handleCreateOrEditQuote}
      />
    </div>
  );
}

export default App;
