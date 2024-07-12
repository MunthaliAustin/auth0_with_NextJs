function LogoutButton() {
  return (
    <a href="/api/auth/logout" className="hover:underline">
      Logout
    </a>
  );
}

export default LogoutButton;
