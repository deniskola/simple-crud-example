import {useState, useEffect} from "react";
import "./App.css";
import QuoteDashboard from "./Components/QuoteDashboard";
import agent from "./api/agent";
import {v4 as uuid} from "uuid";
import LoadingComponent from "./Components/LoadingComponent";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState(undefined);
  const [createMode, setCreateMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log(selectedQuote);
  useEffect(() => {
    agent.Quotes.list().then((response) => {
      setQuotes(response);
      setLoading(false);
    });
  }, []);

  function handleSelectQuote(id) {
    setSelectedQuote(quotes.find((x) => x.id === id));
  }

  function handleCancelSelectQuote() {
    setSelectedQuote(undefined);
    setCreateMode(false);
  }

  function handleFormOpen() {
    handleCancelSelectQuote();
    setCreateMode(true);
  }

  function handleFormClose() {
    setCreateMode(false);
  }

  function handleCreateOrEditQuote(quote) {
    setSubmitting(true);
    if (quote.id) {
      agent.Quotes.update(quote).then(() => {
        setQuotes([...quotes.filter((x) => x.id !== quote.id), quote]);
        setSelectedQuote(quote);
        setCreateMode(false);
        setSubmitting(false);
      });
    } else {
      quote.id = uuid();
      agent.Quotes.create(quote).then(() => {
        setQuotes([...quotes, quote]);
        setSelectedQuote(quote);
        setCreateMode(false);
        setSubmitting(false);
      });
    }
  }

  function handleDeleteQuote(id) {
    setSubmitting(true);
    agent.Quotes.delete(id).then(() => {
      setQuotes([...quotes.filter((x) => x.id !== id)]);
      setSubmitting(false);
    });
  }

  return (
    <div>
      {(submitting || loading) && <LoadingComponent />}
      <QuoteDashboard
        quotes={quotes}
        selectedQuote={selectedQuote}
        selectQuote={handleSelectQuote}
        cancelSelectQuote={handleCancelSelectQuote}
        createMode={createMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
        createOrEdit={handleCreateOrEditQuote}
        deleteQuote={handleDeleteQuote}
      />
    </div>
  );
}

export default App;
