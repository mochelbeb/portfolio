import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
export type FooterProps = {};
export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="[&a]:hover:underline bg-background/70 mt-28">
      <div className="container flex flex-wrap items-center p-10 gap-10 justify-center sm:justify-between mx-auto text-xl">
        <div className="flex flex-wrap justify-center">
          <ul className="flex items-center space-x-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/Projects"}>Projects</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 lg:mt-0 [&>a>svg]:w-9 [&>a>svg]:h-9 [&>a]:flex [&>a]:gap-2 [&>a]:items-center text-xl">
          <Link href={"https://github.com/I-3B"}>
            <Github /> GitHub
          </Link>
          <Link href={"https://www.linkedin.com/in/islam-nassani-994a32194"}>
            <Linkedin aria-label="LinkedIn" />
            LinkedIn
          </Link>
          <Link href={"islamnaasani@gmail.com"}>
            <Mail aria-label="Email" />
            Email
          </Link>
          <Link href={"https://t.me/islam_naasani"}>
            <Send aria-label="Telegram" className="pt-[2px]" />
            Telegram
          </Link>
          <Link href={"https://stackoverflow.com/users/14283533/i3b"}>
            <svg
              aria-label="Stack Overflow"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="2 2 20 20"
              className="fill-white"
            >
              <path d="M17.24 19.399v-4.804h1.6V21H4.381v-6.405h1.598v4.804H17.24zM7.582 17.8h8.055v-1.604H7.582V17.8zm.195-3.64 7.859 1.641.34-1.552-7.861-1.642-.338 1.553zm1.018-3.794 7.281 3.398.678-1.463-7.281-3.399-.678 1.454v.01zm2.037-3.589 6.166 5.142 1.018-1.216-6.162-5.14-1.016 1.213-.006.001zm3.982-3.778-1.311.969 4.803 6.454 1.313-.971-4.807-6.452h.002z"></path>
            </svg>
            Stack Overflow
          </Link>
        </div>
      </div>
    </footer>
  );
};
