/** @jsx jsx */
import React from "react";
import Colors from "../colors";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

export const PageTitle = props => {
  const { text } = props;
  return (
    <span
      style={{
        fontSize: 54,
        lineHeight: "75px",
        borderBottom: `3px solid ${Colors.navToolbar}`,
        width: "100%",
        paddingBottom: 5,
        color: Colors.navToolbar
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
        color: Colors.navToolbar,
        opacity: 0.7,
        marginBottom: 14
      }}
    >
      {text}
    </div>
  );
};

export const DateLabel = ({ text }) => {
  return (
    <div>
      <span
        css={css`
          font-size: 18px;
          font-family: "Roboto", sans-serif;
          border-bottom: 2px solid black;
          padding-bottom: 7px;
        `}
      >
        {text.toUpperCase()}
      </span>
    </div>
  );
};

export const PostTitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: 900;
`;
