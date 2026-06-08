import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "../data";
import type { Page } from "../types";
import { PawMark } from "./Brand";

interface NavbarProps {
  page: Page;
  go: (p: Page) => void;
  wrapClass?: string;
}

export default function Navbar({ page, go, wrapClass = "" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const nav = (k: Page) => {
    setOpen(false);
    go(k);
  };

  return (
    <div className={wrapClass}>
      <nav className="flex items-center gap-3 rounded-2xl bg-white/70 py-2 pl-2.5 pr-2 shadow-sm ring-1 ring-black/5 backdrop-blur-md sm:gap-6 sm:pl-3">
        <button
          onClick={() => nav("home")}
          className="shrink-0 transition-transform hover:scale-[1.03] active:scale-95"
        >
          <PawMark />
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {NAV.map(([k, label]) => (
            <button
              key={k}
              onClick={() => nav(k)}
              className={
                "relative whitespace-nowrap text-sm font-medium transition " +
                (page === k ? "text-orange-600" : "text-gray-700 hover:text-gray-950")
              }
            >
              {label}
              {page === k && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-orange-500" />
              )}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-1">
          <button
            onClick={() => nav("home")}
            className="whitespace-nowrap rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 active:scale-95 sm:px-5"
          >
            제보하기 🐾
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-700 transition hover:bg-black/5 md:hidden"
            aria-label="메뉴"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mt-2 flex animate-fade-up flex-col rounded-2xl bg-white/90 p-2 shadow-sm ring-1 ring-black/5 backdrop-blur-md md:hidden">
          {NAV.map(([k, label]) => (
            <button
              key={k}
              onClick={() => nav(k)}
              className={
                "rounded-xl px-3 py-3 text-left text-sm font-medium transition " +
                (page === k ? "bg-orange-50 text-orange-600" : "text-gray-700 hover:bg-black/5")
              }
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
