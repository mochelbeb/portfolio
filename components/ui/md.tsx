import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import {
  ComponentPropsWithoutRef,
  forwardRef,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "./button";

const P = (p: React.JSX.IntrinsicElements["p"]) => <p {...p} />;

const Strong = (strong: React.JSX.IntrinsicElements["strong"]) => (
  <strong className="font-bold" {...strong} />
);

const OL = (p: React.JSX.IntrinsicElements["ol"]) => (
  <ol className="list-decimal" {...p} />
);
const LI = (p: React.JSX.IntrinsicElements["li"]) => (
  <li className="leading-relaxed" {...p} />
);
const UL = (p: React.JSX.IntrinsicElements["ul"]) => (
  <ul className="list-disc" {...p} />
);

const Divider = (hr: React.JSX.IntrinsicElements["hr"]) => (
  <hr
    className="dark:border-border-dark my-6 block border-b border-t-0 border-border"
    {...hr}
  />
);
const A = (a: React.JSX.IntrinsicElements["a"]) => <a target="_blank" {...a} />;
const Blockquote = ({
  children,
  ...props
}: JSX.IntrinsicElements["blockquote"]) => {
  return (
    <blockquote
      className="shadow-inner-border relative flex border-l-violet-900 px-4 py-1 leading-6"
      {...props}
    >
      <span className="relative block">{children}</span>
    </blockquote>
  );
};

export type HeadingProps = {
  className?: string;
  isPageAnchor?: boolean;
  children?: React.ReactNode;
  id?: string;
  as?: any;
};

const Heading = forwardRef(function Heading(
  {
    as: Comp = "div",
    className,
    children,
    id,
    isPageAnchor = true,
    ...props
  }: HeadingProps,
  ref,
) {
  let label = "Link for this heading";
  if (typeof children === "string") {
    label = "Link for " + children;
  }

  return (
    <Comp id={id} {...props} ref={ref} className={cn(className)}>
      <a
        href={`#${id}`}
        aria-label={label}
        title={label}
        className={cn(
          Comp === "h1" ? "hidden" : "inline-block",
          "flex items-center gap-1 no-underline hover:underline [&:hover_svg]:opacity-100 [&_svg]:opacity-0",
        )}
      >
        {children}
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 13 13"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-70 h-5  w-5 transition-opacity"
        >
          <g fill="currentColor" fillRule="evenodd">
            <path d="M7.778 7.975a2.5 2.5 0 0 0 .347-3.837L6.017 2.03a2.498 2.498 0 0 0-3.542-.007 2.5 2.5 0 0 0 .006 3.543l1.153 1.15c.07-.29.154-.563.25-.773.036-.077.084-.16.14-.25L3.18 4.85a1.496 1.496 0 0 1 .002-2.12 1.496 1.496 0 0 1 2.12 0l2.124 2.123a1.496 1.496 0 0 1-.333 2.37c.16.246.42.504.685.752z" />
            <path d="M5.657 4.557a2.5 2.5 0 0 0-.347 3.837l2.108 2.108a2.498 2.498 0 0 0 3.542.007 2.5 2.5 0 0 0-.006-3.543L9.802 5.815c-.07.29-.154.565-.25.774-.036.076-.084.16-.14.25l.842.84c.585.587.59 1.532 0 2.122-.587.585-1.532.59-2.12 0L6.008 7.68a1.496 1.496 0 0 1 .332-2.372c-.16-.245-.42-.503-.685-.75z" />
          </g>
        </svg>
      </a>
    </Comp>
  );
});

const H1 = ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
  <Heading
    as={"h1"}
    className={cn(className, "font-display text-5xl font-bold leading-tight")}
    {...props}
  />
);

const H2 = ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
  <Heading
    as={"h2"}
    className={cn(
      "font-display dark:text-primary-dark text-3xl font-bold leading-10 text-primary",
      className,
    )}
    {...props}
  />
);

const H3 = ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
  <Heading
    as={"h3"}
    className={cn(
      className,
      "font-display dark:text-primary-dark my-6 text-2xl font-bold leading-9 text-primary",
    )}
    {...props}
  />
);

const H4 = ({ className, ...props }: ComponentPropsWithoutRef<"h4">) => (
  <Heading
    as={"h4"}
    className={cn(className, "font-display my-4 text-xl font-bold leading-9")}
    {...props}
  />
);

const Code = memo(function FC({
  className,
  ...props
}: ComponentPropsWithoutRef<"code">) {
  return (
    <code {...props} className={cn("w-full rounded-lg bg-zinc-800 p-1")} />
  );
});

const CodeBlock = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"pre">) => {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLPreElement>(null);
  const handleCopy = async () => {
    if (ref.current?.textContent) {
      navigator.clipboard
        .writeText(ref.current?.textContent)
        .catch((e) => console.error(e))
        .then(() => setCopied(true));
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  });
  return (
    <div className="relative">
      <Button
        variant={"ghost"}
        onClick={handleCopy}
        className="absolute  end-1 top-7 flex items-center gap-1 bg-background/40 px-2 py-1 text-sm"
      >
        {copied ? <Check /> : <Copy />}
        {copied ? "Copied!" : "Copy"}
      </Button>
      <pre
        {...props}
        className={cn(
          className,
          "rounded-sm [&_code]:bg-transparent [&_code]:p-0",
        )}
        ref={ref}
      />
    </div>
  );
};

const MDXComponents = {
  p: P,
  strong: Strong,
  blockquote: Blockquote,
  ol: OL,
  ul: UL,
  li: LI,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  a: A,
  hr: Divider,
  code: Code,
  pre: CodeBlock,
};
export default MDXComponents;
