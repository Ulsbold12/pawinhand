import type { ReactNode } from "react";
import type { Page } from "../types";
import Navbar from "./Navbar";
import { BgVideo, FloatingPaws } from "./Brand";
import Footer from "./Footer";

interface ContentViewProps {
  page: Page;
  go: (p: Page) => void;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}

/** Shared page shell: rounded card with a video-banner header + content body. */
export default function ContentView({ page, go, title, subtitle, children }: ContentViewProps) {
  return (
    <div className="min-h-screen bg-white p-3 sm:p-4 md:p-6">
      <div className="relative min-h-[calc(100vh-24px)] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.04] sm:min-h-[calc(100vh-48px)] sm:rounded-3xl">
        <div className="relative h-[clamp(200px,33vh,340px)]">
          <BgVideo className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/45" />
          <FloatingPaws />
          <Navbar page={page} go={go} wrapClass="absolute top-0 inset-x-0 z-30 p-4 sm:p-6 md:p-8" />
          <div className="absolute bottom-0 left-0 right-0 z-10 animate-fade-up p-4 sm:p-6 md:p-8">
            <p className="text-3xl font-medium leading-tight text-white drop-shadow-lg sm:text-4xl xl:text-5xl">
              {title}
            </p>
            {subtitle && (
              <p className="mt-2 max-w-xl text-base text-white/85 drop-shadow sm:text-lg">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="flex animate-page flex-col gap-6 p-4 sm:p-6 md:p-8">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
