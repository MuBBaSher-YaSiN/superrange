// app/dashboard/page.tsx
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// Define the shape of a contact row
interface Contact {
  id: number;
  name: string;
  email: string;
  topic: string | null;
  contact: string | null;
  msg: string;
  created_at: string; // ISO date string from Supabase
}

export default async function DashboardPage() {
  // Create a Supabase client on the server
  const supabase = createServerComponentClient({ cookies });

  // Get the logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If no user, redirect before rendering anything
  if (!user) {
    redirect("/");
  }

 const { data: contacts } = await supabase
  .from("contact")
  .select("*")
  .order("created_at", { ascending: false }) as { data: Contact[] | null };


  return (
    <div className="bg-dark text-white min-vh-100 overflow-auto p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-danger mb-0"> Contact Form Submissions</h2>
        <form action="/logout" method="post">
          <button className="btn btn-outline-danger">Logout</button>
        </form>
      </div>
      <table className="table table-dark table-bordered border-danger">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Topic</th>
            <th>Contact</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.topic ?? "-"}</td>
              <td>{c.contact ?? "-"}</td>
              <td>{c.msg}</td>
              <td>{new Date(c.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
