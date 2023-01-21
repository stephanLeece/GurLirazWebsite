import React from "react";
import { TransitionState } from "gatsby-plugin-transition-link";
import { motion } from "framer-motion";

const PageTransitionWrapper = ({ children, className }) => {
    const variants = {
        hidden: { x: "100%" },
        visible: { x: "0%" }
    }
    return (
        <TransitionState>
            {() => (
                <motion.div
                    className={className}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    {children}
                </motion.div>
            )}
        </TransitionState>
    );
};

export default PageTransitionWrapper;