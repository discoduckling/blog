import React from "react";
import Link from "next/link";

const InterSiteLink = props => {
  const { text, to } = props;
  return (
    <Link href={to}>
      <a>{text}</a>
    </Link>
  );
};

export default InterSiteLink;
