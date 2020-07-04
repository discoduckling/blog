import React from "react";

const NavBarLink = props => {
  const { text, onClick, selected, color } = props;
  return (
    <div style={{ marginBottom: 8 }}>
      <span
        style={{
          color: color,
          fontSize: 14,
          borderBottom: `1px solid ${color}`,
          paddingBottom: 3
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default NavBarLink;
