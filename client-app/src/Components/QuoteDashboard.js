import React from 'react';
import Form from './Form';
import QuoteList from './QuoteList';

export default function QuoteDashboard({quotes}) {
  
    return (
        <div>
            <QuoteList quotes={quotes}/>
            <Form/>
        </div>
    );
}