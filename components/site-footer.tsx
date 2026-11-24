import { navigation } from "@/lib/site-content";
import { Wordmark } from "./ui";

export function SiteFooter() {
  return (
    <footer className="container site-footer">
      <div>
        <Wordmark />
        <p>
          More connection. More possibility.
          <br />
          Don’t build alone.
        </p>
      </div>
      <nav aria-label="Footer navigation">
        {navigation.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
