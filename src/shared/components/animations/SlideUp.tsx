"use client";

import { motion, type Variants } from "framer";
import React from "react";

type SlideUpProps = {
  children?: React.ReactNode;
  /** Y軸方向の移動距離（px） */
  offset?: number;
  /** アニメーションの遅延時間（秒） */
  delay?: number;
  /** アニメーションの持続時間（秒） */
  duration?: number;
};

const slideUpVariants: Variants = {
  hidden: (custom: { offset: number }) => ({
    opacity: 0,
    y: custom.offset,
  }),
  visible: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: "easeOut",
    },
  }),
};

export const SlideUp = ({
  children,
  offset = 40,
  delay = 0,
  duration = 0.5,
}: SlideUpProps) => {
  return (
    <motion.div
      custom={{ offset, delay, duration }}
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};
