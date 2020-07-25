/** @jsx jsx */
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/core";
import Colors from "../colors";
import { useState } from "react";
import { PostTitle, DateLabel } from "./Titles";
import Link from "next/link";

export const BlurbText = styled.div`
  font-size: 18px;
  font-weight: 200;
  color: ${Colors.subTitleGray};
  line-height: 22px;
  overflow: hidden;
`;

export const PostOverviewSmall = props => {
  const { post } = props;
  const { date, title, blurb, postType, pid } = post;
  const [hover, setHover] = useState(false);
  return (
    <div style={{ marginBottom: 40 }}>
      <div
        css={css`
          height: 5px;
          width: ${hover ? 336 : 168}px;
          background-color: ${hover ? Colors.orange : Colors.highlightPurple};
          transition: width 0.3s ease-out, background-color 0.3s;
        `}
      />
      <Link href={`/${postType}/${pid}`} as={`/${postType}/${pid}`}>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          css={css`
            width: 336px;
            height: 414px;
            background-color: white;
            padding: 40px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            cursor: pointer;
          `}
        >
          <DateLabel text={date} />
          <PostTitle
            css={css`
              margin-top: 28px;
              flex-grow: 1;
              margin-bottom: 15px;
            `}
          >
            {title}
          </PostTitle>
          <BlurbText>{blurb}</BlurbText>
        </div>
      </Link>
    </div>
  );
};

export const PostOverviewLarge = props => {
  const { post } = props;
  const { date, title, blurb, postType, pid } = post;
  const [hover, setHover] = useState(false);
  return (
    <div
      css={css`
        margin-bottom: 100px;
        max-width: 1200px;
        min-width: 975px;
      `}
    >
      <div
        css={css`
          height: 5px;
          width: ${hover ? "100%" : "30%"};
          background-color: ${hover ? Colors.orange : Colors.highlightPurple};
          transition: width 0.3s ease-out, background-color 0.3s;
        `}
      />
      <Link href={`/${postType}/${pid}`} as={`/${postType}/${pid}`}>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          css={css`
            height: 414px;
            background-color: white;
            box-sizing: border-box;
            display: flex;
            cursor: pointer;
          `}
        >
          <div
            css={css`
              padding: 40px;
              width: 50%;
            `}
          >
            <DateLabel text={date} />
            <PostTitle
              css={css`
                margin-top: 40px;
                margin-bottom: 50px;
                flex-grow: 1;
              `}
            >
              {title}
            </PostTitle>
            <BlurbText>{blurb}</BlurbText>
          </div>
          <img
              src={post.image_path}
              style={{ maxHeight: "100%" }}
          />
        </div>
      </Link>
    </div>
  );
};
