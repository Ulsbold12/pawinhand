import { useEffect } from "react";
import { X, MapPin, Phone, Heart, Zap } from "lucide-react";
import type { AdoptionPet } from "../types";
import ImageSlot from "./ImageSlot";

interface PetModalProps {
  pet: AdoptionPet;
  tone: string;
  liked: boolean;
  onLike: (id: string) => void;
  onClose: () => void;
}

export default function PetModal({ pet, tone, liked, onLike, onClose }: PetModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center sm:p-6">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md animate-pop overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-gray-700 shadow-sm backdrop-blur transition hover:bg-white"
          aria-label="닫기"
        >
          <X size={18} />
        </button>

        <div className={"relative h-56 " + tone}>
          <ImageSlot id={`adopt-${pet.id}`} placeholder={`${pet.emoji}  사진 추가`} radius={0} />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-7xl opacity-90 drop-shadow">{pet.emoji}</span>
          </div>
          {pet.urgent && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-red-500 px-2.5 py-1 text-[11px] font-bold text-white shadow">
              <Zap size={11} />긴급 입양
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">{pet.name}</h3>
              <p className="mt-0.5 text-sm text-gray-500">
                {pet.breed} · {pet.age} · {pet.gender}
              </p>
            </div>
            <button
              onClick={() => onLike(pet.id)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50 ring-1 ring-gray-200 transition hover:scale-110 active:scale-95"
              aria-label="찜"
            >
              <Heart
                size={19}
                fill={liked ? "#ef4444" : "none"}
                className={liked ? "text-red-500" : "text-gray-500"}
              />
            </button>
          </div>

          <span className="flex items-center gap-1.5 text-sm text-gray-500">
            <MapPin size={15} className="text-gray-400" />
            {pet.location}
          </span>

          <div className="flex flex-wrap gap-1.5">
            {pet.tags.map((t) => (
              <span key={t} className="rounded-lg bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">
                {t}
              </span>
            ))}
          </div>

          <p className="mt-1 text-sm leading-relaxed text-gray-500">
            {pet.name}는 새로운 가족을 기다리고 있어요. 입양 절차와 방문 일정은 전화로 안내해 드립니다. 🐾
          </p>

          <div className="mt-1 flex gap-2">
            <a
              href="tel:15881234"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-orange-500 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 active:scale-[0.98]"
            >
              <Phone size={16} /> 입양 문의하기
            </a>
            <button
              onClick={onClose}
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-700 ring-1 ring-gray-200 transition hover:ring-gray-400"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
