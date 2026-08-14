"use client";

import { useCallback, useEffect, useState } from "react";
import { content } from "../content";
import "./cookie-consent.css";

const STORAGE_KEY = "globalpass:cookie-consent";

/** Lets the footer reopen the banner so a stored choice can be revoked. */
export const COOKIE_PREFERENCES_EVENT = "globalpass:cookie-preferences";

type ConsentStatus = "all" | "essential";

function readStoredStatus(): ConsentStatus | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    const status = (parsed as { status?: unknown } | null)?.status;

    return status === "all" || status === "essential" ? status : null;
  } catch {
    // Malformed value or storage blocked: treat it as no decision yet.
    return null;
  }
}

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Reading storage while rendering would desync server and client markup, so
    // the decision is only checked after mount.
    if (readStoredStatus() === null) {
      setIsOpen(true);
    }

    const reopen = () => setIsOpen(true);
    window.addEventListener(COOKIE_PREFERENCES_EVENT, reopen);

    return () => window.removeEventListener(COOKIE_PREFERENCES_EVENT, reopen);
  }, []);

  const decide = useCallback((status: ConsentStatus) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ status, decidedAt: new Date().toISOString() }),
      );
    } catch {
      // Private browsing can reject writes; closing the banner still respects
      // the click, it just will not be remembered on the next visit.
    }

    setIsOpen(false);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <div className="cookie-banner-card">
        <div className="cookie-banner-text">
          <strong id="cookie-banner-title">{content.cookies.title}</strong>
          <p id="cookie-banner-description">{content.cookies.description}</p>
        </div>

        <div className="cookie-banner-actions">
          <button
            type="button"
            className="button button-secondary"
            onClick={() => decide("essential")}
          >
            {content.cookies.essential}
          </button>
          <button
            type="button"
            className="button button-primary"
            onClick={() => decide("all")}
          >
            {content.cookies.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
