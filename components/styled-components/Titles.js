/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

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
