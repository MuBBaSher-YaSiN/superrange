"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "./actions";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const { error } = await loginAction(email, password);
    if (error) {
      alert(error.message);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="login-container text-white d-flex flex-column align-items-center justify-content-center vh-100 bg-dark">
      <h2 className="mb-4">Admin Login</h2>
      <form onSubmit={handleLogin} className="p-4 border border-danger rounded" style={{ minWidth: "300px" }}>
        <input className="form-control mb-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="form-control mb-3" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-danger w-100" type="submit">Login</button>
      </form>
    </div>
  );
}

