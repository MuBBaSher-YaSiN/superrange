"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getContacts = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/");
        return;
      }
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error) setContacts(data);
    };
    getContacts();
  }, []);

  return (
    <div className="bg-dark text-white min-vh-100 p-4">
      <h2 className="text-danger mb-4">Contact Form Submissions</h2>
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
          {contacts.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.topic}</td>
              <td>{c.contact}</td>
              <td>{c.msg}</td>
              <td>{new Date(c.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
