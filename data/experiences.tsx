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
    title: "CS Student",
    company: (
      <Link target="_blank" href="https://www.alepuniv.edu.sy/">
        University Of Aleppo
      </Link>
    ),
    location: "Aleppo, Syria",
    from: "2019-9",
    to: null,
    noDuration: true,
    description: (
      <>
        <p>{`Currently in my senior year with 86.7% grade`}</p>
        <p className="pt-1">
          {
            "I've got equipped with a wide range of knowledge covering: algorithms, data structure, and software engineering mythologies"
          }
        </p>
        <p className="pt-1">
          {
            "as I took more software engineering courses I've done my 4th year project: "
          }
          <Link target="_blank" href="https://github.com/i-3b/uBay">
            uBay
          </Link>
          {` which is a social media platform for selling and buying second-hand items.`}
        </p>
      </>
    ),
  },
  {
    title: "Full Stack JavaScript Course (MERN stack)",
    company: (
      <Link target="_blank" href="https://www.theodinproject.com">
        The Odin Project
      </Link>
    ),
    from: "2021/01",
    to: "2022/08",
    description: (
      <>
        <p>
          The Odin project is a high quality coding education platform
          maintained by an open source community.
        </p>
        <p className="py-1">
          {`I've`} took{" "}
          <Link
            target="_blank"
            href="https://www.theodinproject.com/paths/foundations/courses/foundations"
          >
            the Foundation
          </Link>{" "}
          and{" "}
          <Link
            target="_blank"
            href="https://www.theodinproject.com/paths/full-stack-javascript"
          >
            the Full Stack JavaScript (MERN)
          </Link>
          courses, covering a large amount of skills such as: JavaScript, Git,
          React, Express, MongoDB, and TypeScript.
        </p>
        <p className="py-1">
          {`The course also equipped me with a lot of soft skills like problem solving,
             how to find solutions (googling) and a better developer mindset overall.`}
        </p>
        <p>
          {`I've built many projects as a part of this course such as a `}
          <Link target="_blank" href="https://github.com/I-3B/PurpleBook-API">
            Facebook clone
          </Link>
          , a
          <Link target="_blank" href="https://github.com/I-3B/blog-API">
            {" "}
            personal blog
          </Link>{" "}
          and a{" "}
          <Link target="_blank" href="https://github.com/I-3B/members-only">
            chatroom
          </Link>
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
          project, which was a food delivery service called HumyApp it has been
          uploaded to the store and currently has over 10k users. I worked in
          the front-end team were we built the admin dashboard.
        </p>
        <p className="pt-1">
          Our work was mainly crafting complex forms and CRUD operations to
          manage all of the three applications (customer, driver, pioneer) such
          as reviewing new drivers and posting customized notifications. The
          dashboard also has a permission-based authorization system.
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
           One is Safra Binakra which is a centralized platform for inland traveling,
            I built the web version of the user application, which was a mobile-first PWA, and a dashboard for managing the platform.`}
        </p>
        <p className="pt-1">
          {`The second product is a management system for a university in Syria, which is still under development, where I also built a web-version app
           and a dashboard with role-based authorization system.`}
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
