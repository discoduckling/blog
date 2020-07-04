import React from "react";
import Truncate from "react-truncate";

const BlurbText = props => {
  const { text, lines } = props;
  return (
    <div
      style={{
        fontSize: 16,
        height: "100%"
      }}
    >
      <Truncate lines={lines} ellipsis={<span>...</span>}>
        {text}
      </Truncate>
    </div>
  );
};

export default BlurbText;
