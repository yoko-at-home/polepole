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
          src="https://drive.google.com/file/d/1sdCRmOcvlV1S4YEU24VTZLEtaz0Az5lx/preview"
          width="100%"
          height="615px"
          allow="autoplay"
        />
      </div>
    </Container>
  );
};

export default FirstConcert;
