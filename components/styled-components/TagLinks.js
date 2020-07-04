import React from "react";
import { TagColors } from "../tag-links";

const TagLink = props => {
  const { category, idx } = props;
  const color = TagColors[category];
  return (
    <div
      style={{
        color: color,
        cursor: "pointer",
        fontSize: 16,
        marginLeft: idx ? 14 : 0
      }}
      onClick={null}
    >
      {category}
    </div>
  );
};

export default TagLink;
