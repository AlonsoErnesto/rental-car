'use client';

import {
  Variants,
  motion,
  useAnimationControls,
  useInView,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { RevealProps } from './Reveal.types';

export const fadeIn = (position: string, delay?: number): Variants => {
  return {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        // delay: delay ? delay : 0.5,
        delay: delay ?? 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    hidden: {
      y: position === 'bottom' ? -80 : 0,
      x: position === 'right' ? 90 : 0,
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.25],
      },
    },
  };
};
export default function Reveal(props: RevealProps) {
  const { children, position, classname, delay } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimationControls();
  const slideControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        className={classname}
        variants={fadeIn(position, delay)}
        initial='hidden'
        animate={mainControls}
        exit='hidden'
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
