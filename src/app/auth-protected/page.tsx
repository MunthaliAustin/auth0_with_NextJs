import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { NextPage } from "next";

const AuthProtected: NextPage = withPageAuthRequired(
  async () => {
    const session = await getSession();
    const user = session?.user;
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24 text-2xl">
        {" "}
        Inside Auth Protected Page
      </div>
    );
  },
  { returnTo: "auth-protected" }
);

export default AuthProtected;
