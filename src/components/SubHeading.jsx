import React from "react";

const SubHeading = ({ children, size, color, alignment, custom }) => {
  const baseStyle = "font-semibold";

  const sizeStyle = {
    small: "text-md",
    medium: "text-xl",
    large: "text-2xl",
  };

  const colorStyle = {
    primary: "text-blue-500",
    secondary: "text-gray-600",
  };

  const alignmentStyle = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <h3
      className={`${baseStyle} ${sizeStyle[size]} ${colorStyle[color]} ${alignmentStyle[alignment]} ${custom}`}
    >
      {children}
    </h3>
  );
};

SubHeading.defaultProps = {
  size: "medium",
  color: "primary",
  alignment: "left",
  custom: "",
};

export default SubHeading;
