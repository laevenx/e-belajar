import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  function start() {
    history.push("/play");
  }
  return (
    <div style={{paddingTop: 150}}>
      <p style={{ fontFamily: "Evanter",textAlign: "center",fontSize: "x-large",fontSize: 32 }}>Welcome!! </p>
      <p style={{ textAlign: "center",fontSize: "x-large"  }}>Press Start To Begin</p>
      <Button
        type="primary"
        onClick={() => start()}
        block
        style={{
          marginTop: "10px",
          textAlign: "center",

          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100px",
          borderRadius: 12,
        }}
      >
        Start
      </Button>
    </div>
  );
}
