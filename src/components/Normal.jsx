import React from "react";

const Text = ({ content, size, color, alignment, custom }) => {
  const baseStyle = "font-normal";

  const sizeStyle = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const colorStyle = {
    primary: "text-blue-400",
    secondary: "text-gray-500",
  };

  const alignmentStyle = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <p
      className={`${baseStyle} ${sizeStyle[size]} ${colorStyle[color]} ${alignmentStyle[alignment]} ${custom}`}
    >
      {content}
    </p>
  );
};

Text.defaultProps = {
  size: "medium",
  color: "primary",
  alignment: "left",
  custom: "",
};

export default Text;
