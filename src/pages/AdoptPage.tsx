import { useState } from "react";
import { Phone } from "lucide-react";
import type { Page, AdoptionPet } from "../types";
import { ADOPTION_PETS, TONES } from "../data";
import ContentView from "../components/ContentView";
import { Tabs } from "../components/ui";
import { AdoptCard } from "../components/Cards";
import PetModal from "../components/PetModal";

export default function AdoptPage({ go }: { go: (p: Page) => void }) {
  const [filter, setFilter] = useState("전체");
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<AdoptionPet | null>(null);

  const tabs = ["전체", "강아지", "고양이", "기타"];
  const list = filter === "전체" ? ADOPTION_PETS : ADOPTION_PETS.filter((p) => p.type === filter);

  const toggleLike = (id: string) => setLiked((m) => ({ ...m, [id]: !m[id] }));
  const toneOf = (pet: AdoptionPet) => TONES[ADOPTION_PETS.indexOf(pet) % TONES.length];

  return (
    <ContentView
      page="adopt"
      go={go}
      title={
        <>
          새로운 <span className="serif-it text-orange-300">가족</span>을 기다려요
        </>
      }
      subtitle="보호소에서 따뜻한 집을 기다리는 아이들. 평생 가족이 되어 주세요."
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Tabs tabs={tabs} value={filter} onChange={setFilter} />
        <span className="shrink-0 text-sm text-gray-400">{list.length}마리</span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <AdoptCard
            key={p.id}
            pet={p}
            tone={toneOf(p)}
            i={i}
            liked={!!liked[p.id]}
            onLike={toggleLike}
            onOpen={setSelected}
          />
        ))}
      </div>

      <div className="mt-2 flex flex-col gap-4 rounded-2xl bg-orange-50 p-5 ring-1 ring-orange-100 sm:flex-row sm:items-center sm:p-6">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">함께할 준비가 되셨나요?</h3>
          <p className="mt-1 text-sm text-gray-500">입양 절차와 보호소 방문은 전화로 안내해 드려요.</p>
        </div>
        <a
          href="tel:15881234"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 active:scale-95"
        >
          <Phone size={16} /> 1588-1234
        </a>
      </div>

      {selected && (
        <PetModal
          pet={selected}
          tone={toneOf(selected)}
          liked={!!liked[selected.id]}
          onLike={toggleLike}
          onClose={() => setSelected(null)}
        />
      )}
    </ContentView>
  );
}
