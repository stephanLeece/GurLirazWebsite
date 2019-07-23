import React from "react";
import Layout from "../components/Layout";
import  { TransitionState } from "gatsby-plugin-transition-link";
import posed from 'react-pose';

class Links extends React.Component {
  render() {
    const PosedLayout = posed(Layout)({
        open: { x: '0%' },
  closed: { x: '-100%' }
      });

    return (
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <PosedLayout
              location={this.props.location}
              className="posedLayout"
              pose={
                ["entering", "entered"].includes(transitionStatus)
                  ? "open"
                  : "closed"
              }
            >
              <p> lovely links</p>
            </PosedLayout>
          );
        }}
      </TransitionState>
    );
  }
}

export default Links;


