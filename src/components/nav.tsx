"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import SignupButton from "./signup-btn";
import LogoutButton from "./logout-btn";
import LoginButton from "./signin-btn";

function Nav() {
  const { user, error, isLoading } = useUser();

  return (
    <div className="flex justify-around  ">
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
        <a href="/intercept" className="hover:underline">
          Intercept
        </a>
      </div>
      <div className="flex gap-4">
        {!user && !isLoading && (
          <>
            <SignupButton />
            <LoginButton />
          </>
        )}
        {user && !isLoading && (
          <>
            <LogoutButton />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
