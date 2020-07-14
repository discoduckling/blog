import React from "react";
import Colors from "../colors";
import Link from "next/link";

export const PageTitle = props => {
  const { text } = props;
  return (
    <span
      style={{
        fontSize: 54,
        lineHeight: "75px",
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
  const { text, href, as } = props;
  return (
    <Link href={href} as={as}>
      <div
        style={{
          fontSize: 28,
          marginBottom: 14,
          cursor: "pointer"
        }}
      >
        {text}
      </div>
    </Link>
  );
};
