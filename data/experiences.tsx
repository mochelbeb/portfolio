import { ReactNode } from "react";

export type Experience = {
  title: ReactNode;
  company: ReactNode;
  location?: ReactNode;
  from: string;
  to: string | null;
  noDuration?: boolean;
  description: ReactNode;
};
export const EXPERIENCES: Experience[] = [
  {
    title: "CS Student",
    company: (
      <a target="_blank" href="https://www.alepuniv.edu.sy/">
        University Of Aleppo
      </a>
    ),
    location: "Aleppo, Syria",
    from: "2019-9",
    to: null,
    noDuration: true,
    description: (
      <>
        <p>
          CLICK Online is a product startup, I worked in the development team on
          two product. One is Safra Binakra which is a centralized platform for
          inland traveling, offering users the ability to seamlessly search,
          compare, and book realtime seats in trips.
        </p>
        <p className="pt-1">
          The second is still underdevelopment, I worked there with various
          technologies mostly those around SPAs and achieving a seamless
          experience
        </p>
      </>
    ),
  },
  {
    title: "Full Stack JavaScript Course (MERN stack)",
    company: (
      <a
        target="_blank"
        href="https://www.theodinproject.com/paths/full-stack-javascript"
      >
        The Odin Project
      </a>
    ),
    from: "2021/01",
    to: "2022/08",
    description: (
      <>
        <p>
          CLICK Online is a product startup, I worked in the development team on
          two product. One is Safra Binakra which is a centralized platform for
          inland traveling, offering users the ability to seamlessly search,
          compare, and book realtime seats in trips.
        </p>
        <p className="pt-1">
          The second is still underdevelopment, I worked there with various
          technologies mostly those around SPAs and achieving a seamless
          experience
        </p>
      </>
    ),
  },
  {
    title: "Front-end Developer",
    company: (
      <a target="_blank" href="http://www.ulutech-sy.com/">
        Ulutech
      </a>
    ),
    location: "Aleppo, Syria",
    from: "2022-10",
    to: "2022-12-8",
    description: (
      <>
        <p>
          CLICK Online is a product startup, I worked in the development team on
          two product. One is Safra Binakra which is a centralized platform for
          inland traveling, offering users the ability to seamlessly search,
          compare, and book realtime seats in trips.
        </p>
        <p className="pt-1">
          The second is still underdevelopment, I worked there with various
          technologies mostly those around SPAs and achieving a seamless
          experience
        </p>
      </>
    ),
  },
  {
    title: "Front-end Developer",
    company: "CLICK Online",
    location: "Aleppo, Syria",
    from: "2022-12",
    to: null,
    description: (
      <>
        <p>
          CLICK Online is a product startup, I worked in the development team on
          two product. One is Safra Binakra which is a centralized platform for
          inland traveling, offering users the ability to seamlessly search,
          compare, and book realtime seats in trips.
        </p>
        <p className="pt-1">
          The second is still underdevelopment, I worked there with various
          technologies mostly those around SPAs and achieving a seamless
          experience
        </p>
      </>
    ),
  },
];
