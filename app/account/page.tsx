export function AccountPage() {
  const mode = new URLSearchParams(window.location.search).get("mode");

  return (
    <main
      id="main-content"
      className="container section-pad account-page"
      tabIndex={-1}
    >
      <h1>{mode === "login" ? "Log in" : "Sign up"}</h1>
      <p>Account access is unavailable on this deployment.</p>
      <a className="text-link" href="/">
        Back to Hatch
      </a>
    </main>
  );
}
