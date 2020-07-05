import React from "react";
import NavBox from "../styled-components/nav-elements/NavBox";
import { PageTitle } from "../styled-components/Titles";

const OverviewLayout = props => {
  const { pageTitle } = props;
  return (
    <div
      style={{
        display: "flex",
        padding: 30,
        fontFamily: "Helvetica, sans-serif"
      }}
    >
      <NavBox />
      <div style={{ padding: "0px 45px" }}>
        <PageTitle text={pageTitle} />
        <div style={{ marginTop: 60, paddingLeft: 50 }}>{props.children}</div>
      </div>
    </div>
  );
};

export default OverviewLayout;
