import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "../components/styled-components/Code";
import { preToCodeBlock } from "mdx-utils";
import "../styles/global.css";

const mdComponents = {
  h1: props => <h1 style={{ color: "tomato" }} {...props} />,
  // inlineCode: props => <span style={{ color: "green" }} {...props} />,
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <Code {...props} />;
    } else {
      return <pre {...preProps} />;
    }
  }
};

export default ({ Component, pageProps }) => {
  return (
    <MDXProvider components={mdComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
};
