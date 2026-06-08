import { useState } from "react";
import { Search } from "lucide-react";
import type { Page, Post } from "../types";
import ContentView from "../components/ContentView";
import { Tabs } from "../components/ui";
import { FoundCard } from "../components/Cards";

interface FoundPageProps {
  go: (p: Page) => void;
  posts: Post[];
}

export default function FoundPage({ go, posts }: FoundPageProps) {
  const [filter, setFilter] = useState("전체");
  const [search, setSearch] = useState("");
  const tabs = ["전체", "찾는 중", "찾았어요"];

  const filtered = posts
    .filter((p) => filter === "전체" || p.status === filter)
    .filter(
      (p) =>
        !search.trim() ||
        p.name.includes(search) ||
        p.location.includes(search) ||
        p.color.includes(search) ||
        p.animalType.includes(search)
    );

  return (
    <ContentView
      page="found"
      go={go}
      title={
        <>
          발견된 <span className="serif-it text-orange-300">동물들</span>
        </>
      }
      subtitle="최근 제보된 잃어버린·발견된 아이들이에요. 혹시 아는 친구가 있나요?"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Tabs tabs={tabs} value={filter} onChange={setFilter} />
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="이름, 장소, 색상..."
              className="w-44 rounded-full border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm placeholder-gray-400 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900 sm:w-52"
            />
          </div>
          <span className="shrink-0 text-sm text-gray-400">{filtered.length}건</span>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-12 text-center">
          <span className="text-4xl">🔍</span>
          <p className="text-sm text-gray-500">검색 결과가 없습니다</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <FoundCard key={p.id} post={p} i={i} />
          ))}
        </div>
      )}
    </ContentView>
  );
}
