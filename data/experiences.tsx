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
    title: "Artificial Intelligence Engineer",
    company: (
      <Link target="_blank" href="https://www.univ-alger.dz/">
        University Of Algeirs 1
      </Link>
    ),
    location: "Algiers, Algeria",
    from: "2019-9",
    to: "2024-6-8",
    noDuration: true,
    description: (
      <>
        <p>{`Graduated with a Bachelor's degree in Camputer Science and a Master's degree in Artificial Intelligence Engineering.`}</p>
        <p className="pt-1">
          {
            "I started my journey in the field of computer science, where I learned the basics of programming, algorithms, and data structures. I also studied computer networks, databases, and software engineering. I developed a passion for artificial intelligence and machine learning, which led me to pursue a master's degree in AI engineering."
          }
        </p>
        <p className="pt-1">
          {
            "as I took more software engineering courses I've done my 4th year project, "
          }
          <Link href="/projects/smart-revision">
            Smart Revision
          </Link>
          {` which is a mobile application that helps students revise for exams by generating quizzes based on their course material using AI. I also worked on a research project, `}
          And my graduation project,{" "}
          <Link href="/projects/route-dz">
            Route DZ
          </Link>
          {" "} which is a mobile application that helps users find the best route to their destination, taking into account traffic conditions, road closures, and accidents.
        </p>
      </>
    ),
  },
  {
    title: "Backend Developer",
    company: (
      <Link target="_blank" href="https://www.upwork.com/">
        Freelance
      </Link>
    ),
    location: "Algiers, Algeria (Remote)",
    from: "2022-10",
    to: "2023-6-8",
    description: (
      <>
        <p>
          {`I worked on a variety of projects, including building RESTful APIs, developing microservices, and optimizing database performance. I collaborated with clients to understand their needs, design solutions, and deliver high-quality code.`}
        </p>
        <p className="pt-1">
          {
            "I've worked on a project that required me to build a RESTful API for a mobile application that helps users find nearby restaurants, view their menus, and place orders. I also developed a microservice that processes user data and sends notifications based on user preferences."
          }
        </p>
      </>
    ),
  },
  {
    title: "Full-stack Developer",
    company: (
      <Link target="_blank" href="https://attraxia.io/">
        Attraxia
      </Link>
    ),
    location: "Harju County, Estonia (Remote)",
    from: "2024-9",
    to: "2025-3",
    description: (
      <>
        <p>
          {`Attraxia is a software company that builds custom projects for clients. As a full-stack developer, I worked on developing web applications, optimizing system architecture, and enhancing user interfaces. I contributed to building scalable backend solutions, improving front-end experiences, and ensuring seamless integration across platforms.`}
        </p>
      </>
    ),
  },
  {
    title: "Full-stack Developer",
    company: (
      <Link target="_blank" href="https://camio.app/">
        CAMIO LLC
      </Link>
    ),
    location: "Dover DE, USA (Remote)",
    from: "2023-6-19",
    to: null,
    description: (
      <>
        <p>
          {`CAMIO is a cargo transportation platform in Algeria and Morocco. I started as a backend developer, restructuring the database, optimizing pricing systems, and implementing geo-tracking. Later, as a full-stack developer, I enhanced the admin panel, improved trip and document management, and resolved critical system issues.`}
        </p>
      </>
    ),
  },
];