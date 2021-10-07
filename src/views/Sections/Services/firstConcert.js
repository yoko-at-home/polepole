import React from "react";
import "./styles.css";
import { Container } from "react-bootstrap";

const FirstConcert = () => {
  return (
    <Container>
      <h1 style={{ marginTop: "6rem" }}>ポレポーレ 2021 ファーストコンサートのご報告</h1>
      <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <iframe
          title="続 ポレポーレ物語"
          width="100%"
          height="615px"
          src="https://www.youtube.com/embed/GAhSsJVeUvc"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Container>
  );
};

export default FirstConcert;
