import { Check, Search } from "lucide-react";
import type { Status } from "../types";

export function StatusBadge({ status }: { status: Status }) {
  const found = status === "찾았어요";
  return (
    <span
      className={
        "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold " +
        (found ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600")
      }
    >
      {found ? (
        <>
          찾았어요 <Check size={11} />
        </>
      ) : (
        <>
          찾는 중 <Search size={11} />
        </>
      )}
    </span>
  );
}

export function Tabs({
  tabs,
  value,
  onChange,
}: {
  tabs: string[];
  value: string;
  onChange: (t: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={
            "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition active:scale-95 " +
            (value === t
              ? "bg-gray-900 text-white shadow"
              : "bg-white text-gray-600 ring-1 ring-gray-200 hover:ring-gray-400")
          }
        >
          {t}
        </button>
      ))}
    </div>
  );
}
