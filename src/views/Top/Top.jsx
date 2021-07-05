import React from "react";
import PropTypes from "prop-types";
import { Fireworks } from "fireworks-js/dist/react";

import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";

const options = {
  speed: 3,
};

const style = {
  // left: "45%",
  // top: 0,
  width: "100%",
  height: "100%",
  background: "rgba(12, 12, 58, 0.0)",
};

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName, jumpToAnchor, jumpToAnchorText } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  let extraInfoPart;
  if (jumpToAnchor && jumpToAnchorText) {
    extraInfoPart = (
      <Button size="xl" variant="primary" className="text-uppercase" onClick={scrollToSection}>
        {jumpToAnchorText}
      </Button>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <ImageCard
        imageFileName={imageFileName}
        header={header}
        subheader={subheader}
        extraInfo={extraInfoPart}
      />
      <div style={{ position: "absolute", top: "10%", left: "5%" }}>
        <Fireworks options={options} style={style} />
      </div>
      <div style={{ position: "absolute", top: "55%", left: "5%" }}>
        <Fireworks options={options} style={style} />
      </div>
      <div style={{ position: "absolute", top: "55%", right: "5%" }}>
        <Fireworks options={options} style={style} />
      </div>
    </div>
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
