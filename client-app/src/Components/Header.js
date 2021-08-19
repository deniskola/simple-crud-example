import {Box, Button, Container} from "@material-ui/core";
import React from "react";
import {
  AddCircleOutline,
  FormatQuoteOutlined,
  FormatQuote,
} from "@material-ui/icons";
import {Grid} from "@material-ui/core";

export default function Header({openForm}) {
  return (
    <Container>
      <Box
        style={{
          backgroundColor: "#00695c",
          color: "white",
          marginTop: "20px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs>
            <Box display="flex" justifyContent="center" alignItems="center">
              <div id="logo">
                <FormatQuote
                  style={{
                    marginLeft: "10px",
                    fontSize: "30px",
                    transform: "rotate(180deg)",
                  }}
                />
                <span>...</span>
                <FormatQuote style={{fontSize: "30px"}} />
              </div>
            </Box>
          </Grid>
          <Grid item xs>
            <Box display="flex" justifyContent="center">
              <Button
                onClick={openForm}
                variant="outlined"
                style={{
                  color: "white",
                  border: "0px solid white",
                  margin: "10px 10px 10px 10px",
                }}
              >
                <AddCircleOutline />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
