"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">

      <div className="w-full max-w-md border p-8 rounded-xl">

        <h1 className="text-3xl font-bold mb-6">Login to PRESTIJ</h1>

        <input
          className="w-full border p-3 mb-4"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-3 mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-black text-white py-3 rounded-lg">
          Login
        </button>

        <p className="mt-4 text-sm text-center">
          No account?{" "}
          <Link href="/register" className="underline">
            Register
          </Link>
        </p>

      </div>

    </main>
  );
}