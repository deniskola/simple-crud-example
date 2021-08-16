import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Button,
  Typography,
  Container,
} from "@material-ui/core";
import {DeleteOutline, Edit, FormatQuoteOutlined} from "@material-ui/icons";

export default function QuoteList({quotes, selectQuote}) {
  return (
    <Container maxWidth="sm">
      <Card variant="outlined" spacing={4}>
        {quotes.map((quote) => {
          return (
            <div key={quote.id}>
              <CardContent style={{textAlign: "center"}}>
                <Typography variant="h5">
                  <FormatQuoteOutlined style={{transform: "rotate(180deg)"}} />{" "}
                  {quote.paragraph} <FormatQuoteOutlined />
                </Typography>
              </CardContent>
              <CardActions className="buttons">
                <Button
                  onClick={() => selectQuote(quote.id)}
                  variant="outlined"
                  style={{color: "blue", border: "0px solid blue"}}
                >
                  <Edit />
                </Button>
                <Button
                  variant="outlined"
                  style={{color: "red", border: "0px solid red"}}
                >
                  <DeleteOutline />
                </Button>
              </CardActions>
              <Divider />
            </div>
          );
        })}
      </Card>
    </Container>
  );
}
