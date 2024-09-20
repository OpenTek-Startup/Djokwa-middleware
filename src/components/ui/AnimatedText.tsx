import { cn } from '../../lib/utils';
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import React, { useEffect, useRef } from 'react';
const qoute: any = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleword: any = {
  initial: {
    y: 50,
    x: -10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
interface iWord {
  word: string;
  className?: string;
}
export const SplitText = ({ words }: { words: iWord[] }) => {
  const _words = words.map((word, index) => (
    <motion.span
      variants={singleword}
      className={cn('inline-block', word.className)}
      key={index + word.word}
    >
      {word.word} &nbsp;
    </motion.span>
  ));

  return <>{_words}</>;
};
interface iAnimatedProps {
  className?: string;
  inView?: boolean;
  amount?: number;
  words: iWord[];
}
export const AnimatedText = ({
  words,
  className,
  inView,
  amount,
}: iAnimatedProps) => {
  return (
    <div
      className={cn(` w-full  mx-auto  py-2 flex items-center justify-center text-center 
            overflow-hidden`)}
    >
      <motion.h1
        variants={qoute}
        initial="initial"
        animate={inView ? false : 'animate'}
        whileInView={inView ? 'animate' : ''}
        viewport={{ once: true, amount: amount ? amount : 0.2 }}
        className={cn(
          `break-words
                inline-block w-full text-dark font-black  capitalize
                text-6xl`,
          className
        )}
      >
        <SplitText words={words} />
      </motion.h1>
    </div>
  );
};

export function Counter({ from, to }: { from: number; to: number }) {
  const ref = useRef<any>();
  const isInView = useInView(ref, { amount: 'some', once: false });

  useEffect(() => {
    const controls = animate(from, to, {
      mass: 20,
      stiffness: 300,
      duration: 5,
      onUpdate(value) {
        if (ref.current && isInView) ref.current.textContent = value.toFixed(0);
      },
    });
    return () => controls.stop();
  }, [from, to, isInView]);

  return <motion.div ref={ref}></motion.div>;
}

export const AnimatedNumber = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const ref = useRef<any>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
  });
  const isInView = useInView(ref, {
    once: false,
    amount: 0.8,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && typeof latest === 'number') {
        const latestFixed = Number(latest.toFixed(0));
        if (latestFixed <= value) {
          ref.current.textContent = latestFixed.toString();
        }
      }
    });
  }, [springValue, value]);

  return <div ref={ref} className={className}></div>;
};
