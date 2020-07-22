import React from "react";
import { PostOverviewLarge } from "../components/styled-components/PostOverview";

export default {
  title: "Post Overview Large",
  component: PostOverviewLarge
};

const sampleBlurb =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis mi ut semper vulputate. Donec scelerisque sed est ut fermentum. Aenean ultrices, nunc a aliquam auctor, nisl nisl pretium massa, ut pellentesque diam erat sed urna. ";

export const BasicExample = () => {
  return (
    <div style={{ backgroundColor: "#f2f2f2", padding: 20 }}>
      <PostOverviewLarge
        date={"07 July 2020"}
        title={"My first post on this site"}
        blurb={sampleBlurb}
      />
    </div>
  );
};
