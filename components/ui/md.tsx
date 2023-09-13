import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

const P = (p: React.JSX.IntrinsicElements["p"]) => (
  <p className="whitespace-pre-wrap my-4" {...p} />
);

const Strong = (strong: React.JSX.IntrinsicElements["strong"]) => (
  <strong className="font-bold" {...strong} />
);

const OL = (p: React.JSX.IntrinsicElements["ol"]) => (
  <ol className="ml-6 my-3 list-decimal" {...p} />
);
const LI = (p: React.JSX.IntrinsicElements["li"]) => (
  <li className="leading-relaxed mb-1" {...p} />
);
const UL = (p: React.JSX.IntrinsicElements["ul"]) => (
  <ul className="ml-6 my-3 list-disc" {...p} />
);

const Divider = () => (
  <hr className="my-6 block border-b border-t-0 border-border dark:border-border-dark" />
);

const Blockquote = ({
  children,
  ...props
}: JSX.IntrinsicElements["blockquote"]) => {
  return (
    <blockquote
      className="mdx-blockquote py-4 px-8 my-8 shadow-inner-border dark:shadow-inner-border-dark bg-highlight dark:bg-highlight-dark bg-opacity-50 rounded-2xl leading-6 flex relative"
      {...props}
    >
      <span className="block relative">{children}</span>
    </blockquote>
  );
};

export const H1 = ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
  <h1
    className={cn(className, "text-5xl font-display font-bold leading-tight")}
    {...props}
  />
);

export const H2 = ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
  <h2
    className={cn(
      "text-3xl font-display leading-10 text-primary dark:text-primary-dark font-bold my-6",
      className,
    )}
    {...props}
  />
);

export const H3 = ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
  <h3
    className={cn(
      className,
      "text-2xl font-display leading-9 text-primary dark:text-primary-dark font-bold my-6",
    )}
    {...props}
  />
);

export const H4 = ({ className, ...props }: ComponentPropsWithoutRef<"h4">) => (
  <h4
    className={cn(className, "text-xl font-display font-bold leading-9 my-4")}
    {...props}
  />
);

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
  hr: Divider,
};
export default MDXComponents;
