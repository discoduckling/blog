/** @jsx jsx */
import { device } from "../media-query-breakpoints";
import { jsx, css } from "@emotion/core";
import NavBar from "../styled-components/NavBar";

const OverviewLayout = props => {
  const { selected } = props;
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <NavBar selected={selected} />
      <div
        css={css`
          padding: 160px 20px;
          @media ${device.tablet} {
            padding: 160px 120px;
          }
        `}
      >
        {props.children}
      </div>
    </div>
  );
};

export default OverviewLayout;
