import { Link } from "@/components/ui/link";
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
    title: "Information Technology Engineering",
    company: (
      <Link target="_blank" href="https://www.alepuniv.edu.sy/">
        University Of Aleppo
      </Link>
    ),
    location: "Aleppo, Syria",
    from: "2019-9",
    to: "2024-8",
    noDuration: true,
    description: (
      <>
        <p>{`Graduated with a 86% grade`}</p>
        <p className="pt-1">
          {
            "I've got equipped with a wide range of knowledge covering: algorithms, data structure, and software engineering mythologies."
          }
        </p>
        <p className="pt-1">
          {
            "as I took more software engineering courses I've done my 4th year project, "
          }
          <Link target="_blank" href="https://github.com/I-AM-22/uBay">
            uBay
          </Link>
          {` which is a social media platform for selling and buying second-hand items.`}
          And my graduation project,{" "}
          <Link target="_blank" href="https://github.com/I-AM-22/naqla">
            Naqla (نقلة)
          </Link>
          , a platform designed to simplify the process of moving house
          furniture and goods. Inspired by the convenience of ride-sharing apps.
        </p>
      </>
    ),
  },
  {
    title: "Front-end Developer",
    company: (
      <Link target="_blank" href="http://www.ulutech-sy.com/">
        Ulutech
      </Link>
    ),
    location: "Aleppo, Syria",
    from: "2022-10",
    to: "2022-12-8",
    description: (
      <>
        <p>
          I have had the opportunity to work with a great team on a huge
          project, which was a food delivery service called HumyApp. I worked in
          the front-end team were we built the admin dashboard.
        </p>
        <p className="pt-1">
          Our work was mainly crafting complex forms and CRUD operations to
          manage all of the the platform applications (customer, driver,
          pioneer) such as reviewing new drivers and posting customized
          notifications. The dashboard also has a permission-based authorization
          system.
        </p>
      </>
    ),
  },
  {
    title: "Front-end Developer",
    company: "CLICK Online",
    location: "Aleppo, Syria",
    from: "2022-12",
    to: "2023-12",
    description: (
      <>
        <p>
          {`CLICK Online is a product startup, I worked in the development team on two products.
           One is Safra Binakra which is a centralized platform for inland traveling in Syria,
            I built the web version of the user application, which was a mobile-first PWA, and a dashboard for managing the platform.`}
        </p>
        <p className="pt-1">
          {`The second product is a management system for a university in Syria, which is still under development, where I also built a web-version app
           and a dashboard.`}
        </p>
      </>
    ),
  },
  {
    title: "Front-end Developer",
    company: (
      <Link target="_blank" href="https://studio20.my/">
        Studio20
      </Link>
    ),
    location: "Kuala Lumpur, Malaysia (Remote)",
    from: "2024-2-1",
    to: null,
    description: <p>{``}</p>,
  },
];
