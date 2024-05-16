import React from "react";

const CustomButton = ({ label, width, height }) => {
  return (
    <button
      style={{
        backgroundColor: "#685DC5",
        color: "white",
        width: width,
        height: height,
        border: "none",
        borderRadius: "50px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default CustomButton;
