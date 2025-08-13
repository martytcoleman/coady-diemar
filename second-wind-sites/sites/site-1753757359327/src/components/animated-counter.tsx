'use client';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
}

export default function AnimatedCounter({ value }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  
  // Extract prefix (characters before numbers) and suffix (characters after numbers)
  const prefixMatch = value.match(/^[^0-9]*/);
  const suffixMatch = value.match(/[^0-9]*$/);
  const prefix = prefixMatch ? prefixMatch[0] : '';
  const suffix = suffixMatch ? suffixMatch[0] : '';

  return (
    <span ref={ref}>
      {hasAnimated ? (
        <CountUp 
          start={0} 
          end={numericValue} 
          duration={2.5} 
          delay={0.2} 
          separator=","
          prefix={prefix}
          suffix={suffix}
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}