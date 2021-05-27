import React from "react";
import "./styles.css";
import { Container } from "react-bootstrap";

const FirstConcert = () => {
  return (
    <Container>
      <h1 style={{ marginTop: "6rem" }}>第一回演奏会のご案内</h1>
      <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <iframe
          title="ポレポーレ第一回演奏会ご案内"
          width="100%"
          height="615px"
          src="https://www.youtube.com/embed/rj49jZymIcM"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </Container>
  );
};

export default FirstConcert;
