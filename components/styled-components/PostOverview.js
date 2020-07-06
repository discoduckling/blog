import React from "react";
import { PostTitle, SubTitle } from "./Titles";
import BlurbText from "./BlurbText";
import TagLink from "./TagLinks";
import Link from "next/link";

const PostOverview = props => {
  const { title, date, text, tags, id } = props;
  return (
    <div style={{ marginBottom: 53 }}>
      <PostTitle text={title} href={"/blog/[id]"} as={`/blog/${id}`} />
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
