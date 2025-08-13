"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface Contact {
  id: number;
  name: string;
  email: string;
  topic: string | null;
  contact: string | null;
  msg: string;
  created_at: string;
}

export default function DashboardTable({ initialContacts }: { initialContacts: Contact[] }) {
  const [contacts, setContacts] = useState(initialContacts);
  const supabase = createClientComponentClient();

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this row?")) return;

    const { error } = await supabase.from("contact").delete().eq("id", id);
    if (error) {
      alert("Error deleting row: " + error.message);
    } else {
      setContacts((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <table className="table table-dark table-bordered border-danger">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Topic</th>
          <th>Contact</th>
          <th>Message</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.topic ?? "-"}</td>
            <td>{c.contact ?? "-"}</td>
            <td>{c.msg}</td>
            <td>{new Date(c.created_at).toLocaleString()}</td>
            <td>
              <button
                onClick={() => handleDelete(c.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
