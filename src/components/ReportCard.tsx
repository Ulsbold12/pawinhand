import { useState, type FormEvent } from "react";
import { Phone, MapPin, Palette, Image as ImageIcon, User } from "lucide-react";
import { ANIMAL_TYPES } from "../data";
import type { AnimalLabel, Post } from "../types";
import { PawConfetti } from "./Brand";
import ImageSlot from "./ImageSlot";

const inputCls =
  "w-full min-w-0 flex-1 rounded-xl border border-gray-200 bg-transparent px-3 py-2.5 text-sm placeholder-gray-400 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900";

interface ReportCardProps {
  onReport: (data: Omit<Post, "id" | "date">) => void;
}

export default function ReportCard({ onReport }: ReportCardProps) {
  const [animalType, setAnimalType] = useState<AnimalLabel>("강아지");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const emojiFor = (t: AnimalLabel) => ANIMAL_TYPES.find((a) => a.label === t)?.emoji || "🐾";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!location.trim() || !contact.trim()) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    onReport({
      emoji: emojiFor(animalType),
      animalType,
      name: name.trim() || "이름 모름",
      color: color.trim() || "미확인",
      location: location.trim(),
      contact: contact.trim(),
      status: "찾는 중",
    });
    setSending(false);
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setName("");
    setColor("");
    setLocation("");
    setContact("");
    setAnimalType("강아지");
  };

  return (
    <div id="report" className="relative w-full shrink-0 lg:w-[min(480px,45%)]">
      {sent && <PawConfetti />}
      <div className="flex flex-col gap-4 overflow-hidden rounded-2xl bg-white p-4 shadow-2xl sm:rounded-3xl sm:p-6">
        {sent ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <div className="flex h-16 w-16 animate-pop items-center justify-center rounded-full bg-green-50 text-3xl">
              🐾
            </div>
            <h3 className="text-base font-semibold text-gray-900">성공적으로 제보되었습니다!</h3>
            <p className="text-sm text-gray-500">곧 연락드리겠습니다. 함께 찾아볼게요.</p>
            <button
              onClick={reset}
              className="mt-1 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
            >
              새 제보 작성하기 →
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold tracking-tight text-black sm:text-2xl">
              잃어버린 동물 제보하기 🐾
            </h2>

            <div className="flex flex-row items-center justify-between gap-3 rounded-2xl bg-gray-50 px-4 py-2.5">
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-400">급하신가요? 바로 전화</p>
                <a
                  href="tel:15881234"
                  className="block truncate text-sm font-semibold text-orange-500 hover:underline"
                >
                  1588-1234
                </a>
              </div>
              <a
                href="tel:15881234"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition-opacity hover:opacity-80"
              >
                <Phone size={15} />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-gray-200" />
              <span className="whitespace-nowrap text-sm font-medium text-gray-400">또는 제보하기</span>
              <span className="h-px flex-1 bg-gray-200" />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-2">
                {ANIMAL_TYPES.map((a) => {
                  const active = animalType === a.label;
                  return (
                    <button
                      type="button"
                      key={a.label}
                      onClick={() => setAnimalType(a.label)}
                      className={
                        "flex flex-col items-center gap-1 rounded-xl border py-2.5 transition-all active:scale-95 " +
                        (active
                          ? "scale-[1.03] border-orange-400 bg-orange-50 text-orange-600"
                          : "border-gray-200 bg-white text-gray-600 hover:border-gray-400")
                      }
                    >
                      <span className="text-xl">{a.emoji}</span>
                      <span className="text-xs font-semibold">{a.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="relative">
                <User size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  className={inputCls + " pl-9"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름 (예: 보로)"
                />
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <Palette size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    className={inputCls + " pl-9"}
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="털 색상 (예: 검정)"
                  />
                </div>
                <div className="relative flex-1">
                  <MapPin size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    className={inputCls + " pl-9"}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="발견 장소 *"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <Phone size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="tel"
                  inputMode="tel"
                  className={inputCls + " pl-9"}
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="연락처 010-xxxx-xxxx *"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
                  <ImageIcon size={15} className="text-orange-400" />
                  사진 첨부 <span className="font-normal text-gray-400">(선택)</span>
                </span>
                <div className="h-[120px] w-full">
                  <ImageSlot id="report-photo" placeholder="사진을 여기로 끌어다 놓으세요 🐾" radius={14} />
                </div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-orange-500 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 active:scale-[0.98] disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    전송 중...
                  </>
                ) : (
                  <>제보하기 🐾</>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
