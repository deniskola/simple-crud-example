import React from 'react';
import Form from './Form';
import QuoteList from './QuoteList';
import {Grid,  Container} from '@material-ui/core';
import Header from './Header';

export default function QuoteDashboard({
    quotes , selectQuote, selectedQuote, cancelSelectQuote, createMode, openForm, closeForm, createOrEdit, deleteQuote 
}) {
  
    return (
        <Container >
            <Grid container spacing={3}>
                <Grid item xs={12}   >
                   <Header openForm= {openForm}/>
                </Grid>
                <Grid item xs> 
                    <QuoteList 
                        quotes={quotes} 
                        selectQuote = {selectQuote}
                        openForm ={openForm}
                        deleteQuote = {deleteQuote}
                    />
                </Grid>
                <Grid item xs> 
                    { (selectedQuote || createMode) && 
                    <Form  cancelSelectQuote= {cancelSelectQuote} closeForm={closeForm} quote={selectedQuote} createOrEdit={createOrEdit}/>}
                </Grid>
            </Grid>
            </Container>
           
        
    );
}