import { useEffect, useRef, useState } from "react";
import { ImagePlus } from "lucide-react";

interface ImageSlotProps {
  /** Stable id — the dropped image is persisted under this key in localStorage. */
  id: string;
  placeholder?: string;
  className?: string;
  /** Rounded-corner radius in px for the slot + image. */
  radius?: number;
}

/**
 * A user-fillable image placeholder. Click or drag-and-drop an image file onto
 * it; the picture is stored (as a data URL) in localStorage under `slot:{id}`
 * so it survives reloads. Falls back to a striped placeholder + label.
 */
export default function ImageSlot({
  id,
  placeholder = "사진 추가",
  className = "",
  radius = 14,
}: ImageSlotProps) {
  const storeKey = `slot:${id}`;
  const [src, setSrc] = useState<string | null>(null);
  const [over, setOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      setSrc(localStorage.getItem(storeKey));
    } catch {
      /* ignore */
    }
  }, [storeKey]);

  const handleFile = (file?: File | null) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setSrc(result);
      try {
        localStorage.setItem(storeKey, result);
      } catch {
        /* storage may be full — image still shows for this session */
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setOver(false);
        handleFile(e.dataTransfer.files?.[0]);
      }}
      style={{ borderRadius: radius }}
      className={
        "group relative block h-full w-full overflow-hidden border border-dashed transition " +
        (over ? "border-orange-400 bg-orange-50" : "border-gray-300 bg-gray-50 hover:border-gray-400") +
        " " +
        className
      }
      aria-label={placeholder}
    >
      {src ? (
        <img src={src} alt="" className="h-full w-full object-cover" />
      ) : (
        <span className="flex h-full w-full flex-col items-center justify-center gap-1 px-2 text-center">
          <ImagePlus className="h-5 w-5 text-gray-400 transition group-hover:text-orange-400" />
          <span className="text-[11px] font-medium leading-tight text-gray-400">{placeholder}</span>
        </span>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </button>
  );
}
