import React from "react";
import NavBox from "../styled-components/nav-elements/NavBox";
import { PageTitle } from "../styled-components/Titles";
import { useMediaQuery } from "react-responsive";

const OverviewLayout = props => {
  const { pageTitle } = props;
  const isMobile = useMediaQuery({ maxWidth: 700 });
  return (
    <div
      style={{
        display: "flex",
        padding: isMobile ? 0 : 30,
        fontFamily: "Helvetica, sans-serif",
        flexDirection: isMobile ? "column" : "row"
      }}
    >
      <NavBox isMobile={isMobile}/>
      <div
        style={{
          padding: isMobile ? "15px 5px" : "0px 45px",
            width: isMobile ? null : "60%",
          flexGrow: 1
        }}
      >
        <div style={{ textAlign: isMobile ? "center" : null }}>
          <PageTitle text={pageTitle} />
        </div>
        <div
          style={{
            marginTop: 60,
            paddingLeft: isMobile ? 10 : 50
          }}
        >
          <div style={{ maxWidth: 800 }}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default OverviewLayout;
