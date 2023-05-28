import React from 'react';
import { motion } from 'framer-motion';

export default function Animate({ children }: any) {
  return (
    <motion.div
      className="space-y-20"
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, delay: 0.2, ease: 'easeOut' },
      }}
    >
      {children}
    </motion.div>
  );
}
