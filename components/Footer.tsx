import { NewsletterForm } from "@/components/NewsletterForm";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";
export type FooterProps = {};
export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="grid grid-cols-1 justify-center gap-10 p-5 text-xl md:p-20 lg:grid-cols-3 lg:gap-0">
      <div className="flex flex-col gap-4">
        <h5 className="text-3xl font-semibold">Islam Naasani</h5>
        <ul className="flex flex-col gap-4 ps-4">
          <li>
            <Link href={"/"} className="underline">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/blog"} className="underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href={"/projects"} className="underline">
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <div className="order-1 md:order-none">
        <div className="xs:gap-2 flex flex-row flex-wrap items-start justify-center text-xl lg:mt-0">
          <FooterLink
            href={"https://github.com/I-3B"}
            gradientProps={{ className: "from-purple-800 to-purple-600" }}
          >
            <Github aria-label="GitHub" />
          </FooterLink>
          <FooterLink
            gradientProps={{ className: "from-blue-900 to-blue-600" }}
            href={"https://www.linkedin.com/in/islam-nassani-994a32194"}
          >
            <Linkedin aria-label="LinkedIn" />
          </FooterLink>
          <FooterLink
            href={"mailto:islamnaasani@gmail.com"}
            gradientProps={{ className: "from-red-700 to-orange-500" }}
          >
            <Mail aria-label="Email" />
          </FooterLink>
          <FooterLink
            gradientProps={{ className: "from-blue-300 to-blue-600" }}
            href="https://twitter.com/i_3b___"
          >
            <svg
              width="396"
              aria-label="X/Twitter"
              height="396"
              viewBox="0 0 396 396"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M301.026 37.125H355.608L236.362 173.415L376.645 358.875H266.805L180.774 246.395L82.335 358.875H27.72L155.265 213.098L20.691 37.125H133.32L211.084 139.937L301.026 37.125ZM281.869 326.205H312.114L116.886 68.079H84.4305L281.869 326.205Z"
                fill="white"
              />
            </svg>
          </FooterLink>
          <FooterLink
            href={"https://t.me/islam_naasani"}
            gradientProps={{ className: "from-purple-800 to-blue-600" }}
          >
            <Send aria-label="Telegram" className="pr-1 pt-[2px]" />
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
      <NewsletterForm className="-order-1 lg:order-1" />
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
      className="relative h-10 w-10 overflow-hidden rounded-sm [&:hover>.gradient]:bg-gradient-to-l [&:hover>.gradient]:opacity-100"
    >
      <div
        className={cn(
          "gradient absolute -inset-3 animate-[spin_5s_ease-in-out_infinite] opacity-0 blur-sm transition-opacity",
          gradientProps.className,
        )}
      />
      <div className="absolute inset-0 z-10 m-1.5 flex [&>svg]:h-full [&>svg]:w-full">
        {props.children}
      </div>
    </Link>
  );
};
