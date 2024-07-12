import { getSession } from "@auth0/nextjs-auth0";

export default async function ProfileServer() {
  const session = await getSession();

  const user = session?.user;

  return (
    user && (
      <div className="flex min-h-screen flex-col items-center justify-between p-24 text-2xl">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
