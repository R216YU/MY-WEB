"use client";

import { motion } from "framer";
import React from "react";

type FocusZoomProps = {
  children?: React.ReactNode;
  /** 拡大率（デフォルト: 1.05） */
  scale?: number;
  /** アニメーションの持続時間（秒） */
  duration?: number;
};

export const FocusZoom = ({
  children,
  scale = 1.05,
  duration = 0.2,
}: FocusZoomProps) => {
  return (
    <motion.div
      whileHover={{ scale }}
      whileFocus={{ scale }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
