import React from 'react';
import { motion } from 'framer-motion';

export default function Animate({ children, ...props }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, delay: 0.2, ease: 'easeOut' },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type Props = {
  className?: string;
  children: React.ReactNode;
};
