"use client";

import { motion, type Variants } from "framer-motion";

/** Blur & Rise entrance animation config */
export const blurRiseTransition = {
  type: "spring" as const,
  bounce: 0.3,
  duration: 1.5,
};

export const blurRiseVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: blurRiseTransition,
  },
};

/** Container variants for staggering children by 0.05s */
export const blurRiseContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
};

type BlurRiseProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof typeof motion;
  delay?: number;
};

/** Wraps a single element with Blur & Rise entrance animation */
export function BlurRise({
  children,
  className,
  as = "div",
  delay = 0,
}: BlurRiseProps) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      initial="hidden"
      animate="visible"
      variants={blurRiseVariants}
      transition={{
        ...blurRiseTransition,
        delay,
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

type BlurRiseListProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof typeof motion;
};

/** Wraps multiple elements and staggers their Blur & Rise entrance by 0.05s */
export function BlurRiseList({
  children,
  className,
  as = "div",
}: BlurRiseListProps) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      initial="hidden"
      animate="visible"
      variants={blurRiseContainerVariants}
      className={className}
    >
      {children}
    </Component>
  );
}

/** Item to use inside BlurRiseList – each child gets the Blur & Rise animation with stagger */
export function BlurRiseItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof typeof motion;
}) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component variants={blurRiseVariants} className={className}>
      {children}
    </Component>
  );
}
