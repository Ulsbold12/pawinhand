import { MapPin, Phone, Heart, ArrowRight, Zap, Clock } from "lucide-react";
import type { Post, AdoptionPet } from "../types";
import { StatusBadge } from "./ui";
import ImageSlot from "./ImageSlot";

function isRecent(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  return diff < 2 * 24 * 60 * 60 * 1000; // 2 days
}

/* ---------- Found / lost pet card ---------- */
export function FoundCard({ post, i }: { post: Post; i: number }) {
  const tel = "tel:" + post.contact.replace(/[^0-9+]/g, "");
  const recent = isRecent(post.date);
  return (
    <div
      className={
        "lift flex animate-fade-up flex-col gap-3 rounded-2xl bg-white p-4 shadow-md ring-1 " +
        (recent ? "ring-orange-200" : "ring-black/[0.03]")
      }
      style={{ animationDelay: `${i * 70}ms` }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-3">
          <div className="h-14 w-14 shrink-0">
            <ImageSlot id={`found-${post.id}`} placeholder={post.emoji} radius={16} />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="truncate text-base font-bold text-gray-900">{post.name}</span>
              <span className="shrink-0 rounded-full bg-orange-50 px-2 py-0.5 text-[11px] font-bold text-orange-600">
                {post.animalType}
              </span>
              {recent && (
                <span className="shrink-0 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-600">
                  NEW
                </span>
              )}
            </div>
            <div className="mt-0.5 text-sm text-gray-500">{post.color}</div>
          </div>
        </div>
        <StatusBadge status={post.status} />
      </div>

      <div className="flex flex-col gap-1 text-sm text-gray-500">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} className="text-gray-400" />
          {post.location}
        </span>
        <span className="flex items-center gap-1 text-xs text-gray-400">
          <Clock size={11} />
          {post.date}
        </span>
      </div>

      <a
        href={tel}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-2.5 text-sm font-medium text-white transition hover:bg-orange-600 active:scale-[0.98]"
      >
        <Phone size={15} /> 연락하기
      </a>
    </div>
  );
}

/* ---------- Adoption card ---------- */
interface AdoptCardProps {
  pet: AdoptionPet;
  tone: string;
  i: number;
  liked: boolean;
  onLike: (id: string) => void;
  onOpen: (pet: AdoptionPet) => void;
}

export function AdoptCard({ pet, tone, i, liked, onLike, onOpen }: AdoptCardProps) {
  return (
    <div
      className="lift flex animate-fade-up cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/[0.03]"
      style={{ animationDelay: `${i * 70}ms` }}
      onClick={() => onOpen(pet)}
    >
      <div className={"relative h-40 " + tone}>
        <ImageSlot id={`adopt-${pet.id}`} placeholder={`${pet.emoji}  사진 추가`} radius={0} />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-90 drop-shadow-sm">{pet.emoji}</span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onLike(pet.id);
          }}
          className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 shadow-sm backdrop-blur transition hover:scale-110 active:scale-95"
          aria-label="찜"
        >
          <Heart
            size={17}
            fill={liked ? "#ef4444" : "none"}
            className={liked ? "text-red-500" : "text-gray-600"}
          />
        </button>

        <div className="absolute right-3 top-3 flex flex-col items-end gap-1.5">
          <span className="rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-semibold text-gray-700 backdrop-blur">
            {pet.gender}
          </span>
          {pet.urgent && (
            <span className="inline-flex animate-pulse-ring items-center gap-1 rounded-full bg-red-500 px-2.5 py-1 text-[11px] font-bold text-white shadow">
              <Zap size={11} />긴급
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold text-gray-900">{pet.name}</h3>
          <span className="shrink-0 text-xs font-medium text-gray-400">{pet.age}</span>
        </div>
        <p className="-mt-1 text-sm text-gray-500">{pet.breed}</p>
        <span className="flex items-center gap-1.5 text-sm text-gray-500">
          <MapPin size={14} className="text-gray-400" />
          {pet.location}
        </span>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {pet.tags.map((t) => (
            <span key={t} className="rounded-lg bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-600">
              {t}
            </span>
          ))}
        </div>
        <button className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-gray-900 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]">
          자세히 보기 <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
