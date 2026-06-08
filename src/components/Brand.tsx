import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { PawPrint } from "lucide-react";
import { VIDEO_URL } from "../data";

/* ---------- CountUp ---------- */
export function CountUp({
  to,
  dur = 1400,
  suffix = "",
}: {
  to: number;
  dur?: number;
  suffix?: string;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    let start: number | undefined;
    const step = (t: number) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, dur]);
  return (
    <span>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------- Autoplaying background video ---------- */
export function BgVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {
        /* autoplay may be blocked until interaction */
      });
    }
  }, []);
  return (
    <video ref={ref} className={className} autoPlay muted loop playsInline src={VIDEO_URL} />
  );
}

/* ---------- Floating decorative paws ---------- */
const HERO_PAWS = [
  { left: "8%", top: "30%", size: 30, dur: "6.5s", r: "-12deg" },
  { left: "18%", top: "62%", size: 22, dur: "7.5s", r: "8deg" },
  { left: "40%", top: "22%", size: 26, dur: "8s", r: "0deg" },
  { left: "55%", top: "70%", size: 20, dur: "6s", r: "14deg" },
  { left: "72%", top: "34%", size: 34, dur: "7s", r: "-8deg" },
  { left: "86%", top: "58%", size: 24, dur: "8.5s", r: "10deg" },
  { left: "30%", top: "12%", size: 18, dur: "6.8s", r: "-6deg" },
];

export function FloatingPaws() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden" aria-hidden="true">
      {HERO_PAWS.map((p, i) => (
        <span
          key={i}
          className="paw-float absolute select-none text-white/40"
          style={
            {
              left: p.left,
              top: p.top,
              fontSize: p.size,
              "--dur": p.dur,
              "--r": p.r,
              animationDelay: `${i * 0.4}s`,
            } as CSSProperties
          }
        >
          🐾
        </span>
      ))}
    </div>
  );
}

/* ---------- Paw confetti burst ---------- */
export function PawConfetti() {
  const items = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => ({
        i,
        dx: (Math.random() * 2 - 1) * 240,
        dy: -(140 + Math.random() * 240),
        rot: (Math.random() * 2 - 1) * 220,
        dur: 0.9 + Math.random() * 0.8,
        left: 38 + Math.random() * 24,
        size: 14 + Math.random() * 20,
        delay: Math.random() * 0.18,
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-visible" aria-hidden="true">
      {items.map((p) => (
        <span
          key={p.i}
          className="confetti-paw"
          style={
            {
              left: `${p.left}%`,
              top: "60%",
              fontSize: p.size,
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
              "--rot": `${p.rot}deg`,
              "--cdur": `${p.dur}s`,
              animationDelay: `${p.delay}s`,
            } as CSSProperties
          }
        >
          🐾
        </span>
      ))}
    </div>
  );
}

/* ---------- Brand mark ---------- */
export function PawMark({ light = false }: { light?: boolean }) {
  return (
    <span
      className={
        "flex items-center gap-2 text-lg font-extrabold tracking-tight " +
        (light ? "text-white" : "text-gray-900")
      }
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm">
        <PawPrint className="h-[17px] w-[17px]" />
      </span>
      Pawinhand
    </span>
  );
}
