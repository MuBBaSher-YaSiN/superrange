"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function loginAction(email: string, password: string) {
  const supabase = createServerActionClient({ cookies });
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  return { error };
}
