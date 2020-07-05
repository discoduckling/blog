import React from "react";
import Link from "next/link";

const NavBarLink = props => {
  const { text, selected, color, to } = props;
  const navTo = to ?  to : "/";
  const linkText = (
    <span
      style={{
        color: color,
        fontSize: 14,
        borderBottom: `1px solid ${color}`,
        paddingBottom: 3,
        cursor: "pointer"
      }}
    >
      {text}
    </span>
  );
  const link = navTo.includes("http") ? (
    <a href={navTo} style={{ textDecoration: "none"}}>{linkText}</a>
  ) : (
    <Link href={to}>{linkText}</Link>
  );
  return <div style={{ marginBottom: 8 }}>{link}</div>;
};

export default NavBarLink;
