import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";
export type FooterProps = {};
export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="[&a]:hover:underline bg-background/70 mt-28 p-20 gap-10 flex flex-col md:flex-row justify-center sm:justify-between text-xl ">
      <div className="flex flex-col gap-4">
        <h5 className="text-3xl">
          <Link href="/" className="hover:underline">
            Islam Naasani
          </Link>
        </h5>
        <ul className="flex flex-col gap-4 ps-4">
          <li>
            <Link href={"/"} className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/blog"} className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href={"/projects"} className="hover:underline">
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex flex-row items-start justify-center gap-2 lg:mt-0 text-xl">
          <FooterLink
            href={"https://github.com/I-3B"}
            gradientProps={{ className: "from-purple-800 to-purple-600" }}
          >
            <Github aria-label="GitHub" />
          </FooterLink>
          <FooterLink
            gradientProps={{ className: "from-blue-400 to-blue-600" }}
            href={"https://www.linkedin.com/in/islam-nassani-994a32194"}
          >
            <Linkedin aria-label="LinkedIn" />
          </FooterLink>
          <FooterLink
            href={"islamnaasani@gmail.com"}
            gradientProps={{ className: "from-red-700 to-orange-500" }}
          >
            <Mail aria-label="Email" />
          </FooterLink>
          <FooterLink
            href={"https://t.me/islam_naasani"}
            gradientProps={{ className: "from-purple-800 to-blue-500" }}
          >
            <Send aria-label="Telegram" className="pt-[2px] pr-1" />
          </FooterLink>
          <FooterLink
            href={"https://stackoverflow.com/users/14283533/i3b"}
            gradientProps={{ className: "from-orange-400 to-orange-700" }}
          >
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
          </FooterLink>
        </div>
      </div>
      <div />
    </footer>
  );
};

export type FooterLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  gradientProps: ComponentPropsWithoutRef<"div">;
};
export const FooterLink: FC<FooterLinkProps> = ({
  gradientProps,
  ...props
}) => {
  return (
    <Link
      {...props}
      className="border-2 relative border-foreground rounded-full w-14 h-14 overflow-hidden [&:hover>.gradient]:bg-gradient-to-l [&:hover>.gradient]:opacity-100"
    >
      <div
        className={cn(
          "gradient absolute -inset-1 animate-[spin_5s_ease-in-out_infinite] blur-sm opacity-0 transition-opacity",
          gradientProps.className,
        )}
      />
      <div className="absolute inset-0 z-10 flex [&>svg]:w-full [&>svg]:h-full m-2">
        {props.children}
      </div>
    </Link>
  );
};
