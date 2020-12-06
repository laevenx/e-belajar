import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "antd";

export default function Finish() {
  const history = useHistory();

  function finish() {
    history.push("/");
  }

  return (
    <div style={{ paddingTop: 165 }}>
      <p style={{ fontFamily: "Evanter", textAlign: "center", fontSize: 32 }}>
        Congratulations!!
      </p>
      <p style={{ textAlign: "center", fontSize: 24 }}>
        You Finish all questions
      </p>
      <Button
        onClick={() => finish()}
        block
        style={{
          marginTop: "10px",
          textAlign: "center",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "200px",
          borderRadius: 12,
        }}
      >
        Return to Home
      </Button>
    </div>
  );
}
