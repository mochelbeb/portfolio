import { createBrowserClient } from "@supabase/ssr";

export const createClientSupabase = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  );
};

export async function incrementPageHits(path: string) {
  const supabase = createClientSupabase();
  await supabase.rpc("increment_page_hits", { path });
}
