import React from "react";
import { PostTitle, SubTitle } from "./Titles";
import BlurbText from "./BlurbText";
import TagLink from "./TagLinks";

const PostOverview = props => {
  const { title, date, text, tags, postType, pid } = props;
  return (
    <div style={{ marginBottom: 53 }}>
      <PostTitle
        text={title}
        href={`/${postType}/${pid}`}
        as={`/${postType}/${pid}`}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SubTitle text={date} />
        <div style={{ display: "flex" }}>
          {tags &&
            tags.map((t, i) => (
              <TagLink category={t} key={`tag-${i}-${date}`} idx={i} />
            ))}
        </div>
      </div>
      <BlurbText text={text} />
    </div>
  );
};

export default PostOverview;
