"use client";

import { auth } from "@/lib/auth/client";
import { Button } from "@heroui/react";

export default function Demo() {
  const session = auth.useSession();
  console.log("Session:", session);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to the URL Shortener</h1>
      {session.data ? (
        <p className="text-lg">Logged in as: {session.data?.user?.email}</p>
      ) : (
        <p className="text-lg">You are not logged in.</p>
      )}
      <Button>Click!</Button>
    </div>
  );
}
