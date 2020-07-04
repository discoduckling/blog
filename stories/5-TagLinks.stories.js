import React from "react";
import TagLink from "../components/styled-components/TagLinks";
import { TagNames } from "../components/tag-links";

export default {
  title: "Tag Link",
  component: TagLink
};

export const Javascript = () => {
  return <TagLink category={TagNames.JAVASCRIPT} />;
};

export const Python = () => {
  return <TagLink category={TagNames.PYTHON} />;
};

const sampleCategories = [TagNames.AWS, TagNames.LEARNING, TagNames.DOCKER];

export const MultipleTags = () => {
  return (
    <div style={{ display: "flex" }}>
      {sampleCategories.map((c, i) => (
        <TagLink category={c} key={i} idx={i}/>
      ))}
    </div>
  );
};
