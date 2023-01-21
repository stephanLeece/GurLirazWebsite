import React from "react";
import { TransitionState } from "gatsby-plugin-transition-link";
import { motion } from "framer-motion";

interface PageTransitionWrapperProps {
    className?: string;
    children: React.ReactNode;
}

const PageTransitionWrapper = ({ className, children }: PageTransitionWrapperProps) => {
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