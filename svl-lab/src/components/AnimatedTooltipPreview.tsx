import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Chris Bryan",
    designation: "Professor & Head",
    image:
      "chris_bryan.png",
  },
  {
    id: 2,
    name: "Aditi Mishra",
    designation: "PhD Student",
    image:
      "aditi_mishra.jpeg",
  },
  {
    id: 3,
    name: "Jinbin Huang",
    designation: "PhD Student",
    image:
      "jinbin_huang.jpg",
  },
  {
    id: 4,
    name: "Michael Kintscher",
    designation: "PhD Student",
    image:
      "michael_kintscher.jpeg",
  },
  {
    id: 5,
    name: "Bretho Danzy",
    designation: "PhD Student",
    image:
      "bretho_danzy.jpg",
  },
  {
    id: 6,
    name: "Zhuojun Jiang",
    designation: "PhD Student",
    image:
      "zhuojun_jiang.png",
  },
  {
    id: 7,
    name: "Shubham Chawla",
    designation: "MS Student",
    image:
      "shubham_chawla.jpeg",
  },
  {
    id: 8,
    name: "Sruthi Parimi",
    designation: "MS Student",
    image:
      "sruthi_parimi.jpeg",
  },
  {
    id: 9,
    name: "Utkarsh Singh",
    designation: "MS Student",
    image:
      "utkarsh_singh.jpg",
  },
  {
    id: 10,
    name: "Kannak Sharma",
    designation: "MS Student",
    image:
      "kannak_sharma.jpeg",
  }
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
