import React from "react";

const PageTransitionWrapper = ({ children, className }) => {
  return (
        <div
          className={className}
          pose={
            ["entering", "entered"].includes(transitionStatus)
              ? "visible"
              : "hidden"
          }
        >
          {children}
        </div>
  );
};

export default PageTransitionWrapper;
