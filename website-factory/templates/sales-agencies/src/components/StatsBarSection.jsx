import { useEffect, useRef, useState } from 'react';
import brandDNA from '../config/brand-dna';

/**
 * StatsBarSection -- 4-column authority stats strip.
 * Immediately below hero. Count-up animation on first viewport entry.
 * Reads only canonical brand-dna paths.
 */
function useCountUp(target, duration, shouldStart) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setCount(target);
      return;
    }
    const start = performance.now();
    const numeric = parseInt(String(target).replace(/\D/g, ''), 10) || 0;
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numeric));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, shouldStart]);

  return count;
}

function StatCell({ value, label, suffix, index, shouldStart }) {
  const numeric = parseInt(String(value).replace(/\D/g, ''), 10) || 0;
  const counted = useCountUp(numeric, 1200, shouldStart);
  const suffix_ = suffix || (String(value).match(/[+%]/) || [''])[0];

  return (
    <div
      className={`flex flex-col items-center justify-center py-6 lg:py-8 px-4 ${
        index < 3 ? 'border-b lg:border-b-0 lg:border-r border-[#1E3A5F]' : ''
      }`}
      style={{
        opacity: shouldStart ? 1 : 0,
        transform: shouldStart ? 'translateY(0)' : 'translateY(8px)',
        transition: `opacity 400ms cubic-bezier(0.16,1,0.3,1) ${index * 80}ms, transform 400ms cubic-bezier(0.16,1,0.3,1) ${index * 80}ms`,
      }}
    >
      <span className="text-4xl lg:text-5xl font-extrabold text-sky-400 tabular-nums" aria-live="polite">
        {counted}{suffix_}
      </span>
      <span className="mt-1 text-xs font-medium tracking-wider uppercase text-slate-400">
        {label}
      </span>
    </div>
  );
}

const DEFAULT_STATS = [
  { value: '420+', label: 'Meetings Booked' },
  { value: '30+', label: 'Clients Served' },
  { value: '12', label: 'Industries' },
  { value: '4.9', label: 'Clutch Rating' },
];

export default function StatsBarSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const _heroChips = brandDNA.copy.heroTrustChips;
  const chips = Array.isArray(_heroChips) && _heroChips.length > 0
    ? _heroChips.slice(0, 4).map((chip, i) => {
        const match = chip.match(/^([\d.+%,]+)\s*(.*)/);
        if (match) return { value: match[1], label: match[2] || DEFAULT_STATS[i]?.label || '' };
        return { value: DEFAULT_STATS[i]?.value || '', label: chip };
      })
    : DEFAULT_STATS;

  return (
    <section
      id="stats-bar"
      ref={sectionRef}
      aria-label="Key metrics"
      className="bg-[#1A2535] py-2"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {chips.map((stat, i) => (
            <StatCell
              key={i}
              value={stat.value}
              label={stat.label}
              index={i}
              shouldStart={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
