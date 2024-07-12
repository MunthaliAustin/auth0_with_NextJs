"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

import Image from "next/image";
import { redirect } from "next/navigation";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return user ? (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 text-2xl">
      {/* <Image src={user.picture} alt="Pic" width={20} height={20} /> */}
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  ) : (
    redirect("/api/auth/login")
  );
}
