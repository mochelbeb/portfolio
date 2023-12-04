import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createServerSupabase = () => {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    },
  );
};
// TODO add types from database
export async function getPageHits(path: string) {
  const supabase = createServerSupabase();
  return (await supabase.from("page_hits").select().eq("path", path)).data?.[0]
    .hits as number;
}
