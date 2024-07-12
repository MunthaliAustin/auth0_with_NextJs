"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

import Image from "next/image";
import { redirect } from "next/navigation";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading)
    return (
      <div className="border border-blue-300 shadow rounded-md p-4 mx-11 min-h-screen mt-4">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  if (error) return <div>{error.message}</div>;

  return user ? (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 text-2xl">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  ) : (
    redirect("/api/auth/login")
  );
}
