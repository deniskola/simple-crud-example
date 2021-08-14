import {Box, Button, Container} from "@material-ui/core";
import React from "react";
import {AddCircleOutline} from "@material-ui/icons";

export default function Header() {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="flex-end"
        style={{backgroundColor: "#00695c", color: "white", marginTop: "20px"}}
      >
        <Button
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
    </Container>
  );
}
