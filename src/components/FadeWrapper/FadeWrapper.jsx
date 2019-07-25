import React from "react";
import { TransitionState } from "gatsby-plugin-transition-link";
import posed from "react-pose";

export const Fade = posed.div({
  hidden: { x: '100%' },
  visible: { x: '0%' }
});

const FadeWrapper = ({ children }) => {
  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <Fade
          pose={
            ["entering", "entered"].includes(transitionStatus)
              ? "visible"
              : "hidden"
          }
        >
          {children}
        </Fade>
      )}
    </TransitionState>
  );
};

export default FadeWrapper;
