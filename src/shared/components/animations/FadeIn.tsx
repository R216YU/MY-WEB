"use client";

import { motion, type Variants } from "framer";
import React from "react";

type FadeInProps = {
  children?: React.ReactNode;
  /** アニメーションの遅延時間（秒） */
  delay?: number;
  /** アニメーションの持続時間（秒） */
  duration?: number;
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: "easeOut",
    },
  }),
};

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
}: FadeInProps) => {
  return (
    <motion.div
      custom={{ delay, duration }}
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};
