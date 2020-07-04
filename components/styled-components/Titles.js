import React from "react";
import Colors from "../colors";

export const PageTitle = props => {
  const { text } = props;
  return (
    <span
      style={{
        fontSize: 54,
        borderBottom: "3px solid black",
        width: "100%",
        paddingBottom: 5
      }}
    >
      {text}
    </span>
  );
};

export const SubTitle = props => {
  const { text } = props;
  return (
    <div
      style={{
        fontSize: 16,
        color: Colors.subTitleGray,
        marginBottom: 14
      }}
    >
      {text}
    </div>
  );
};

export const PostTitle = props => {
  const { text } = props;
  return (
    <div
      style={{
        fontSize: 28,
        marginBottom: 14
      }}
    >
      {text}
    </div>
  );
};
