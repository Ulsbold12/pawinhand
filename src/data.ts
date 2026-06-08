import type { AnimalType, AdoptionPet, Post, Stat, Page } from "./types";

export const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4";

export const NAV: [Page, string][] = [
  ["home", "홈"],
  ["found", "발견된 동물"],
  ["adopt", "입양"],
  ["about", "소개"],
];

export const ANIMAL_TYPES: AnimalType[] = [
  { emoji: "🐶", label: "강아지" },
  { emoji: "🐱", label: "고양이" },
  { emoji: "🐾", label: "기타" },
];

export const STATS: Stat[] = [
  { emoji: "🐶", value: 1200, suffix: "+", label: "강아지" },
  { emoji: "🐱", value: 800, suffix: "+", label: "고양이" },
  { emoji: "❤️", value: 95, suffix: "%", label: "성공률" },
];

export const SAMPLE_POSTS: Post[] = [
  { id: "1", emoji: "🐶", animalType: "강아지", name: "보로", color: "갈색", location: "강남구", contact: "010-1234-5678", status: "찾는 중", date: "2026-06-07" },
  { id: "2", emoji: "🐱", animalType: "고양이", name: "나비", color: "흰색", location: "홍대", contact: "010-9876-5432", status: "찾았어요", date: "2026-06-06" },
  { id: "3", emoji: "🐶", animalType: "강아지", name: "초코", color: "검정", location: "마포구", contact: "010-5555-1234", status: "찾는 중", date: "2026-06-05" },
  { id: "4", emoji: "🐱", animalType: "고양이", name: "구름", color: "회색", location: "성북구", contact: "010-2222-7788", status: "찾는 중", date: "2026-06-04" },
  { id: "5", emoji: "🐾", animalType: "기타", name: "토토", color: "갈색", location: "용산구", contact: "010-3333-9911", status: "찾았어요", date: "2026-06-03" },
  { id: "6", emoji: "🐶", animalType: "강아지", name: "콩이", color: "크림", location: "송파구", contact: "010-4444-1212", status: "찾는 중", date: "2026-06-02" },
];

export const ADOPTION_PETS: AdoptionPet[] = [
  { id: "a1", emoji: "🐶", type: "강아지", name: "몽이", breed: "믹스견", age: "2살", gender: "수컷", location: "서울 동물보호소", tags: ["사람을 좋아해요", "건강검진 완료"], urgent: false },
  { id: "a2", emoji: "🐱", type: "고양이", name: "루나", breed: "코리안숏헤어", age: "1살", gender: "암컷", location: "경기 동물보호소", tags: ["조용해요", "중성화 완료"], urgent: false },
  { id: "a3", emoji: "🐶", type: "강아지", name: "바둑", breed: "진돗개 믹스", age: "3살", gender: "수컷", location: "인천 동물보호소", tags: ["활발해요", "산책 좋아해요"], urgent: true },
  { id: "a4", emoji: "🐱", type: "고양이", name: "치즈", breed: "치즈태비", age: "6개월", gender: "수컷", location: "서울 동물보호소", tags: ["장난꾸러기", "애교쟁이"], urgent: false },
  { id: "a5", emoji: "🐶", type: "강아지", name: "초롱", breed: "포메라니안", age: "4살", gender: "암컷", location: "대전 동물보호소", tags: ["얌전해요", "실내견"], urgent: true },
  { id: "a6", emoji: "🐰", type: "기타", name: "두부", breed: "토끼", age: "1살", gender: "암컷", location: "수원 동물보호소", tags: ["온순해요", "채소 좋아해요"], urgent: false },
];

export const TONES = [
  "bg-orange-100",
  "bg-amber-100",
  "bg-rose-100",
  "bg-sky-100",
  "bg-emerald-100",
  "bg-violet-100",
];
