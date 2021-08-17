import {
  TextField,
  Box,
  Container,
  ButtonGroup,
  Button,
  Paper,
} from "@material-ui/core";
import React, {useState} from "react";

export default function Form({
  quote: selectedQuote,
  cancelSelectQuote,
  createOrEdit,
}) {
  const initialState = selectedQuote ?? {
    id: "",
    paragraph: "",
  };

  const [quote, setQuote] = useState(initialState);

  function handleSubmit() {
    createOrEdit(quote);
  }

  function handleInputChange(event) {
    const {name, value} = event.target;
    setQuote({...quote, [name]: value});
  }
  return (
    <Container>
      <Paper variant="outlined">
        <form autoComplete="off">
          <Box
            style={{padding: "20px 20px 20px 20px"}}
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <TextField
              onChange={handleInputChange}
              value={quote.paragraph}
              name="paragraph"
              fullWidth={true}
              multiline
              rows={1}
              rowsMax={Infinity}
              label="Quote"
              variant="outlined"
            />

            <ButtonGroup style={{margin: "20px 0 20px 0"}}>
              <Button
                onClick={handleSubmit}
                type="button"
                style={{border: "1px solid green", color: "green"}}
              >
                Submit
              </Button>
              <Button onClick={cancelSelectQuote}>Cancel</Button>
            </ButtonGroup>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
