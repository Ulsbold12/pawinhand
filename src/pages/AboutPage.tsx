import type { ReactNode } from "react";
import { Phone, Search, Heart } from "lucide-react";
import type { Page } from "../types";
import ContentView from "../components/ContentView";
import { CountUp } from "../components/Brand";

interface Step {
  n: string;
  icon: ReactNode;
  title: string;
  desc: string;
}

const STEPS: Step[] = [
  { n: "01", icon: <Phone size={20} />, title: "제보하기", desc: "잃어버린 아이의 정보를 남기거나, 길에서 발견한 동물을 제보해요." },
  { n: "02", icon: <Search size={20} />, title: "함께 찾기", desc: "지역 제보와 보호소 정보를 매칭해 빠르게 주인을 찾아드려요." },
  { n: "03", icon: <Heart size={20} />, title: "재회 · 입양", desc: "가족과 다시 만나거나, 새로운 가족에게 입양으로 이어져요." },
];

const ABOUT_STATS = [
  { value: 1200, suffix: "+", label: "찾은 강아지" },
  { value: 800, suffix: "+", label: "찾은 고양이" },
  { value: 95, suffix: "%", label: "재회 성공률" },
  { value: 40, suffix: "+", label: "협력 보호소" },
];

export default function AboutPage({ go }: { go: (p: Page) => void }) {
  return (
    <ContentView
      page="about"
      go={go}
      title={
        <>
          우리는 <span className="serif-it text-orange-300">Pawmap</span> 입니다
        </>
      }
      subtitle="모두가 집으로 돌아가는 그날까지, 함께 찾고 함께 돌봅니다."
    >
      <p className="max-w-2xl text-pretty text-lg leading-relaxed text-gray-700 sm:text-xl">
        Pawmap는 잃어버린 반려동물을 찾고, 갈 곳 없는 아이들에게 새로운 가족을 연결하는{" "}
        <span className="serif-it text-xl text-orange-500 sm:text-2xl">따뜻한</span> 커뮤니티예요. 작은 제보 하나가 한 가족을 다시 이어 줍니다.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {STEPS.map((s, i) => (
          <div
            key={s.n}
            className="lift flex animate-fade-up flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/[0.05]"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                {s.icon}
              </span>
              <span className="text-2xl font-extrabold text-gray-200">{s.n}</span>
            </div>
            <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
            <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 rounded-2xl bg-gray-900 p-6 text-center text-white sm:grid-cols-4 sm:p-8">
        {ABOUT_STATS.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-extrabold">
              <CountUp to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-sm text-white/60">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 rounded-2xl bg-orange-50 p-5 ring-1 ring-orange-100 sm:flex-row sm:items-center sm:p-6">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">지금 시작해 보세요</h3>
          <p className="mt-1 text-sm text-gray-500">
            잃어버린 아이를 제보하거나, 입양을 기다리는 친구들을 만나보세요.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => go("home")}
            className="whitespace-nowrap rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 active:scale-95"
          >
            제보하기 🐾
          </button>
          <button
            onClick={() => go("adopt")}
            className="whitespace-nowrap rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-800 ring-1 ring-gray-200 transition hover:ring-gray-400"
          >
            입양 보기
          </button>
        </div>
      </div>
    </ContentView>
  );
}
