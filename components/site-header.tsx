import { accountLinks } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="site-header container">
      <nav className="header-actions" aria-label="Account">
        <a href={accountLinks.login}>Log in</a>
        <a className="button header-cta" href={accountLinks.signup}>
          Sign up
        </a>
      </nav>
    </header>
  );
}
