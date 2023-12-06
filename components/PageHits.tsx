import { getPageHits } from "@/supabase/server";
import { ComponentPropsWithoutRef, FC } from "react";

const numberFormat = new Intl.NumberFormat("en", { notation: "standard" })
  .format;
export type PageHitsProps = { page: string } & ComponentPropsWithoutRef<"span">;
export const PageHits: FC<PageHitsProps> = async ({ page, ...props }) => {
  const pageHits = await getPageHits(page);
  return <span {...props}>{numberFormat(pageHits)}</span>;
};
