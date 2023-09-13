import { ReactNode } from "react";

export type Experience = {
  title: ReactNode;
  company: ReactNode;
  location: ReactNode;
  from: string;
  to: string | null;
  noDuration?: boolean;
};
export const EXPERIENCES: Experience[] = [
  {
    title: "CS Student",
    company: <a href="https://www.alepuniv.edu.sy/">University Of Aleppo</a>,
    location: "Aleppo, Syria",
    from: "2019-9",
    to: null,
    noDuration: true,
  },
  {
    title: "Front-end Developer",
    company: <a href="http://www.ulutech-sy.com/">Ulutech</a>,
    location: "Aleppo, Syria",
    from: "2022-10",
    to: "2022-12-8",
  },
  {
    title: "Front-end Developer",
    company: "CLICK Online",
    location: "Aleppo, Syria",
    from: "2022-12",
    to: null,
  },
];
