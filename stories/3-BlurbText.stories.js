import React from "react";
import BlurbText from "../components/styled-components/BlurbText";
import sampleText from "./sample-data/sampleText";

export default {
  title: "Summary Blurb for Post",
  component: BlurbText
};

export const TallDiv = () => (
  <div style={{ height: 100, border: "1px solid blue", width: 400 }}>
    <BlurbText text={sampleText} lines={5} />
  </div>
);

export const ShortDiv = () => (
  <div style={{ height: 50, width: 400, border: "1px solid blue" }}>
    <BlurbText text={sampleText} lines={2} />
  </div>
);

