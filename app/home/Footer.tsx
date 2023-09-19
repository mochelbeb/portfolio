import { Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
export type FooterProps = {};
export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="[&a]:hover:underline bg-gray-950 mt-10">
      <div className="container flex flex-wrap items-center p-10 gap-1 justify-center sm:justify-between mx-auto text-xl">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="1 1 22 22"
              className="fill-white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
              ></path>
            </svg>
            GitHub
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
