import { useEffect, useRef } from "react";
import type { Page, Post } from "../types";
import { STATS, VIDEO_URL } from "../data";
import Navbar from "../components/Navbar";
import { CountUp, FloatingPaws } from "../components/Brand";
import ReportCard from "../components/ReportCard";

interface HomePageProps {
  go: (p: Page) => void;
  onReport: (data: Omit<Post, "id" | "date">) => void;
}

export default function HomePage({ go, onReport }: HomePageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => undefined);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white p-3 sm:p-4 md:p-6">
      <div className="relative min-h-[calc(100vh-24px)] overflow-hidden rounded-2xl sm:min-h-[calc(100vh-32px)] sm:rounded-3xl md:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={VIDEO_URL}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/25" />
        <FloatingPaws />

        <div className="relative z-10 flex min-h-[calc(100vh-24px)] flex-col gap-6 p-4 sm:min-h-[calc(100vh-32px)] sm:p-6 md:min-h-[calc(100vh-48px)] md:p-8 lg:h-full">
          <Navbar page="home" go={go} />
          <div className="min-h-[2rem] flex-1" />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="shrink-0 animate-fade-up lg:max-w-lg xl:max-w-2xl">
              <p className="text-3xl font-medium leading-tight text-white drop-shadow-lg sm:text-4xl xl:text-5xl">
                소중한 <span className="serif-it text-orange-300">반려동물</span>을
                <br />
                잃어버리셨나요?
              </p>
              <p className="mt-4 max-w-md text-base text-white/80 drop-shadow sm:text-lg">
                Pawinhand에 제보하시면 우리가 함께 찾는 것을 도와드립니다.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {STATS.map((s) => (
                  <span
                    key={s.label}
                    className="rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur-md"
                  >
                    <span className="mr-1">{s.emoji}</span>
                    <CountUp to={s.value} suffix={s.suffix} /> {s.label}
                  </span>
                ))}
              </div>
            </div>
            <ReportCard onReport={onReport} />
          </div>
        </div>
      </div>
    </div>
  );
}
