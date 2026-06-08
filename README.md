# 🐾 Pawinhand

잃어버린 반려동물을 찾고, 새로운 가족을 연결하는 따뜻한 커뮤니티 웹앱.
React + TypeScript + Vite + Tailwind CSS 로 제작되었습니다.

## ✨ 기능

- **홈** — 영상 배경 히어로 + 실종 동물 제보 폼 (사진 첨부, 제보 성공 시 발바닥 컨페티 🎉)
- **발견된 동물** — 제보된 동물 카드 그리드, 상태 필터, `tel:` 바로 전화
- **입양** — 보호소 입양 대기 동물, 찜(❤️) · 긴급 배지, 상세 모달
- **소개** — 서비스 소개, 카운트업 통계
- 사진 슬롯: 카드/폼의 이미지 영역에 직접 사진을 끌어다 놓으면 `localStorage`에 저장됩니다.
- 부드러운 모션 (카드 stagger, hover 리프트, 페이지 전환), 모바일 우선 반응형.

## 🚀 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 열기.

## 🏗️ 빌드

```bash
npm run build      # 타입 체크 + 프로덕션 빌드 (dist/)
npm run preview    # 빌드 결과 미리보기
```

## ▲ Vercel 배포

1. 이 폴더를 GitHub 저장소로 푸시합니다.
2. [vercel.com](https://vercel.com) → **Add New → Project** → 저장소 선택.
3. Vercel이 자동으로 Vite를 감지합니다. 그대로 **Deploy** 누르면 끝.
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`

> CLI 로 배포하려면: `npm i -g vercel && vercel`

## 📁 폴더 구조

```
pawinhand-app/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vercel.json
└── src/
    ├── main.tsx          # 진입점
    ├── App.tsx           # 페이지 라우팅 (localStorage 기반)
    ├── index.css         # Tailwind + 커스텀 애니메이션
    ├── types.ts          # 타입 정의
    ├── data.ts           # 더미 데이터 / 상수
    ├── components/
    │   ├── Brand.tsx      # CountUp · BgVideo · FloatingPaws · PawConfetti · PawMark
    │   ├── ImageSlot.tsx  # 드래그앤드롭 사진 슬롯
    │   ├── Navbar.tsx
    │   ├── ui.tsx         # StatusBadge · Tabs
    │   ├── Cards.tsx      # FoundCard · AdoptCard
    │   ├── PetModal.tsx
    │   ├── ReportCard.tsx
    │   └── ContentView.tsx
    └── pages/
        ├── HomePage.tsx
        ├── FoundPage.tsx
        ├── AdoptPage.tsx
        └── AboutPage.tsx
```

## 🎨 커스터마이징

- 더미 데이터는 `src/data.ts` 에서 수정하세요 (`SAMPLE_POSTS`, `ADOPTION_PETS`, `STATS`).
- 배경 영상은 `src/data.ts` 의 `VIDEO_URL` 을 교체하세요.
- 색상/폰트/애니메이션은 `tailwind.config.js` 와 `src/index.css` 에서 조정합니다.

---

Made with 🐾 — 모두가 집으로 돌아가는 그날까지.
# pawinhand
