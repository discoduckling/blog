import React from "react";

const CenteredImage = props => {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {props.children}
      </div>
      <div style={{ fontSize: 12, color: "grey", fontStyle: "italic" }}>
        {props.caption}
      </div>
    </div>
  );
};

export default CenteredImage;
