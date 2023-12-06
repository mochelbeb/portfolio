import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <span
      className={cn("animate-pulse rounded-md bg-zinc-700", className)}
      {...props}
    />
  );
}

export { Skeleton };
