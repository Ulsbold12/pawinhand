import { PawPrint, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-100 bg-gray-50/50 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <span className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-gray-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm">
            <PawPrint className="h-[17px] w-[17px]" />
          </span>
          Pawinhand
        </span>
        <p className="max-w-md text-sm leading-relaxed text-gray-500">
          모두가 집으로 돌아가는 그날까지, 함께 찾고 함께 돌봅니다.
        </p>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          Made with <Heart size={12} className="text-red-400" /> for lost pets
        </div>
        <p className="text-xs text-gray-300">&copy; 2026 Pawinhand. All rights reserved.</p>
      </div>
    </footer>
  );
}
