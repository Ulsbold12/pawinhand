export type AnimalLabel = "강아지" | "고양이" | "기타";
export type Status = "찾는 중" | "찾았어요";
export type Page = "home" | "found" | "adopt" | "about";

export interface Post {
  id: string;
  emoji: string;
  animalType: AnimalLabel;
  name: string;
  color: string;
  location: string;
  contact: string;
  status: Status;
  date: string;
}

export interface AdoptionPet {
  id: string;
  emoji: string;
  type: AnimalLabel;
  name: string;
  breed: string;
  age: string;
  gender: string;
  location: string;
  tags: string[];
  urgent: boolean;
}

export interface AnimalType {
  emoji: string;
  label: AnimalLabel;
}

export interface Stat {
  emoji: string;
  value: number;
  suffix: string;
  label: string;
}
