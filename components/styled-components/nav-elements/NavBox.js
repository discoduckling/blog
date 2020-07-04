import React from "react";
import NavBarLink from "./NavLink";
import Colors from "../../colors";

const NavBox = props => {
  return (
    <div
      style={{
        width: 130,
        height: 269,
        padding: "22px 31px",
        border: "5px solid black"
      }}
    >
      <div style={{ fontSize: 28 }}>Mitalee Desai</div>
      <div style={{ marginTop: 20 }}>
        <NavBarLink text={"Blog"} color={Colors.lightBlue} />
        <NavBarLink text={"Projects"} color={Colors.lightBlue} />
        <NavBarLink text={"How To"} color={Colors.lightBlue} />
      </div>
      <div style={{ marginTop: 30 }}>
        <NavBarLink text={"Github"} color={Colors.purple} />
        <NavBarLink text={"LinkedIn"} color={Colors.purple} />
        <NavBarLink text={"Twitter"} color={Colors.purple} />
      </div>
    </div>
  );
};

export default NavBox;
