"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import SignupButton from "./signup-btn";
import LogoutButton from "./logout-btn";
import LoginButton from "./signin-btn";

function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5  text-blue-500"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M12 2a10 10 0 00-10 10h4a6 6 0 016-6V2z"
      ></path>
    </svg>
  );
}

function Nav() {
  const { user, error, isLoading } = useUser();

  return (
    <div className="flex justify-around">
      <a href="/" className="hover:underline">
        Home
      </a>
      <div className="flex gap-5">
        <a href="/profile" className="hover:underline">
          Profile
        </a>
        <a href="/auth-protected" className="hover:underline">
          Auth
        </a>
        <a href="/intecept" className="hover:underline">
          Intercept
        </a>
      </div>
      <div className="flex gap-4 items-center">
        {isLoading ? (
          <div className="flex items-center gap-2">
            <Spinner />
            <div className="animate-pulse text-blue-500">
              <div className="w-32 h-5 rounded-sm bg-slate-700"></div>
            </div>
          </div>
        ) : !user ? (
          <>
            <SignupButton />
            <LoginButton />
          </>
        ) : (
          <>
            <LogoutButton />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
