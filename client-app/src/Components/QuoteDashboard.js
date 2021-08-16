import React from 'react';
import Form from './Form';
import QuoteList from './QuoteList';
import {Grid,  Container} from '@material-ui/core';
import Header from './Header';

export default function QuoteDashboard({quotes , selectQuote, selectedQuote, cancelSelectQuote}) {
  
    return (
        <Container >
            <Grid container spacing={3}>
                <Grid item xs={12}   >
                   <Header/>
                </Grid>
                <Grid item xs> 
                    <QuoteList 
                        quotes={quotes} 
                        selectQuote = {selectQuote}
                    />
                </Grid>
                <Grid item xs> 
                    {selectedQuote && 
                    <Form cancelSelectQuote= {cancelSelectQuote}/>}
                </Grid>
            </Grid>
            </Container>
           
        
    );
}