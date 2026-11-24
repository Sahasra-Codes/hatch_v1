import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./page";
import { AccountPage } from "./account/page";
import "./globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
    {window.location.pathname === "/account" ? <AccountPage /> : <Home />}
  </StrictMode>,
);
