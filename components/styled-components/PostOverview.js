import React from "react";
import { PostTitle, SubTitle } from "./Titles";
import BlurbText from "./BlurbText";
import TagLink from "./TagLinks";

const PostOverview = props => {
  const { title, date, text, tags } = props;
  return (
    <div style={{ marginBottom: 53 }}>
      <PostTitle text={title} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SubTitle text={date} />
        <div style={{ display: "flex" }}>
          {tags.map((t, i) => (
            <TagLink category={t} key={`tag-${i}-${date}`} idx={i} />
          ))}
        </div>
      </div>
      <BlurbText lines={5} text={text} />
    </div>
  );
};

export default PostOverview;
