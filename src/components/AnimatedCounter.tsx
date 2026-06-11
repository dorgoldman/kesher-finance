'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  /** The final number to count up to */
  target: number;
  /** Text appended after the number, e.g. "+" or "%" */
  suffix?: string;
  /** Count-up duration in ms (default 1600) */
  duration?: number;
  className?: string;
}

/**
 * Counts up from 0 to `target` when it enters the viewport.
 * Respects prefers-reduced-motion, if reduced, renders the final number immediately.
 */
export default function AnimatedCounter({
  target,
  suffix = '',
  duration = 1600,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip animation if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;

          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic for a snappy feel
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString('he-IL')}
      {suffix}
    </span>
  );
}
