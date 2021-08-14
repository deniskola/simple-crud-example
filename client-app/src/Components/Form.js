import {
  TextField,
  Box,
  Container,
  ButtonGroup,
  Button,
  Paper,
} from "@material-ui/core";
import React from "react";

export default function Form() {
  return (
    <Container>
      <Paper variant="outlined">
        <form>
          <Box
            style={{padding: "20px 20px 20px 20px"}}
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <TextField
              fullWidth={true}
              multiline
              rows={1}
              rowsMax={Infinity}
              label="Quote"
              variant="outlined"
            />

            <ButtonGroup style={{margin: "20px 0 20px 0"}}>
              <Button style={{border: "1px solid green", color: "green"}}>
                Submit
              </Button>
              <Button>Cancel</Button>
            </ButtonGroup>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
