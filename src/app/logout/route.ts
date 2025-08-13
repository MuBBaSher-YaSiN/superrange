import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST() {
  const supabase = createRouteHandlerClient({ cookies });
  await supabase.auth.signOut();

  return NextResponse.redirect(
    new URL("/", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
  );
}
