import React from "react";
import "./button.css";

const Button = (props) => {
  const { name = "", className = "", isLoading = false, onClick = {} } = props;
  return (
    <div>
      <button className={className} onClick={(e) => onClick(e)}>
        {isLoading ? "Loading..." : name || "Search"}
      </button>
    </div>
  );
};
export default Button;
