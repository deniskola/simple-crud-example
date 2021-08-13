import React from "react";

export default function QuoteList({quotes}) {
  return (
    <div>
      {quotes.map((quote) => {
        return (
          <div>
            <div key={quote.id}>
              <h1>{quote.paragraph}</h1>
            </div>
            <div className="buttons">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
