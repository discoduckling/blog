import React from "react";
import PostOverview from "../components/styled-components/PostOverview";
import sampleText from "./sample-data/sampleText";
import { TagNames } from "../components/tag-links";

export default {
  title: "Post Overview",
  component: PostOverview
};

export const RecentPost = () => {
  return (
    <PostOverview
      title={"My most recent post"}
      date={"13 May 2020"}
      text={sampleText}
      tags={[TagNames.DOCKER, TagNames.LEARNING]}
    />
  );
};

export const MultiplePosts = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: 600 }}>
        <PostOverview
          title={"My most recent post"}
          date={"13 May 2020"}
          text={sampleText}
          tags={[TagNames.AWS, TagNames.PYTHON, TagNames.JAVASCRIPT]}
        />
        <PostOverview
          title={"My most recent post"}
          date={"13 May 2020"}
          text={sampleText}
          tags={[
            TagNames.REACT,
            TagNames.PYTHON,
            TagNames.LEARNING,
            TagNames.POSTGRES
          ]}
        />
      </div>
    </div>
  );
};
