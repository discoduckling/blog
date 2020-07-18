import React from "react";
import Colors from "../colors";

const BlurbText = props => {
  const { text } = props;
  return (
    <div
      style={{
        fontSize: 16,
        height: "100%",
        color: Colors.navToolbar
      }}
    >
      {text}
    </div>
  );
};

export default BlurbText;
