import React from "react";

const BlurbText = props => {
  const { text } = props;
  return (
    <div
      style={{
        fontSize: 16,
        height: "100%"
      }}
    >
      {text}
    </div>
  );
};

export default BlurbText;
