import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DashboardTable from "./DashboardTable";

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  const { data: contacts } = await supabase
    .from("contact")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="bg-dark text-white min-vh-100 overflow-auto p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-danger mb-0">Contact Form Submissions</h2>
        <form action="/logout" method="post">
          <button className="btn btn-outline-danger">Logout</button>
        </form>
      </div>
      <DashboardTable initialContacts={contacts ?? []} />
    </div>
  );
}
