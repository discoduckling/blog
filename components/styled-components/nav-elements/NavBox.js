import React from "react";
import NavBarLink from "./NavLink";
import Colors from "../../colors";
import Link from "next/link";

const NavBox = props => {
  const { isMobile } = props;
  return (
    <div
      style={{
        width: isMobile ? null : 130,
        height: isMobile ? null : 269,
        padding: "22px 31px",
        border: "5px solid black"
      }}
    >
      <div style={{ fontSize: 28 }}>
        <Link href={"/"}>
          <span style={{ cursor: "pointer" }}>Mitalee Desai</span>
        </Link>
      </div>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          justifyContent: isMobile ? "space-around" : null
        }}
      >
        <NavBarLink text={"Blog"} color={Colors.lightBlue} to={"/blog"} />
        <NavBarLink
          text={"Projects"}
          color={Colors.lightBlue}
          to={"/projects"}
        />
        <NavBarLink
          text={"How To"}
          color={Colors.lightBlue}
          to={"/workflows"}
        />
      </div>
      <div
        style={{
          marginTop: isMobile ? 10 : 30,
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          justifyContent: isMobile ? "space-around" : null
        }}
      >
        <NavBarLink
          text={"Github"}
          color={Colors.purple}
          to={"https://github.com/discoduckling"}
        />
        <NavBarLink
          text={"LinkedIn"}
          color={Colors.purple}
          to={"https://www.linkedin.com/in/msmitalee/"}
        />
        <NavBarLink
          text={"Twitter"}
          color={Colors.purple}
          to={"https://twitter.com/_mitalee"}
        />
      </div>
    </div>
  );
};

export default NavBox;
