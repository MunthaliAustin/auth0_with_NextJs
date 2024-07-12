import Link from "next/link";

function LogoutButton() {
  return (
    <a href="/api/auth/logout" className="hover:underline flex items-center">
      Logout
    </a>
  );
}

export default LogoutButton;
