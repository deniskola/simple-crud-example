import {Backdrop, CircularProgress} from "@material-ui/core";
import React from "react";

export default function LoadingComponent() {
  const style = {
    zIndex: "1",
    backgroundColor: "rgba(69, 69, 69, 0.56)",
  };

  return (
    <Backdrop style={style} open={true}>
      <CircularProgress style={{color: "white"}} />
    </Backdrop>
  );
}
