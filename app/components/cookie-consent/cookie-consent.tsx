"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { content } from "../../content";
import { cn } from "../../lib/cn";
import { buttonPrimary, buttonSecondary } from "../../lib/ui";

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
    return null;
  }
}

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (readStoredStatus() === null) {
      // SSR stays closed; localStorage is only available after mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only open after hydration
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
      // Private browsing can reject writes.
    }

    setIsOpen(false);
  }, []);

  if (!isOpen) return null;

  const actionButton =
    "px-[1.4rem] py-[0.7rem] text-[0.9rem] font-medium whitespace-nowrap max-[760px]:w-full";

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <div
        className={cn(
          "mx-auto flex w-[min(1180px,100%)] items-center gap-7 rounded-[22px] border border-line",
          "bg-white/97 px-6 py-5 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-[12px]",
          "animate-cookie-in motion-reduce:animate-none",
          "max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-[18px] max-[760px]:p-5",
        )}
      >
        <div>
          <strong
            id="cookie-banner-title"
            className="mb-1.5 block text-base tracking-tight"
          >
            {content.cookies.title}
          </strong>
          <p
            id="cookie-banner-description"
            className="m-0 max-w-[78ch] text-[0.88rem] leading-[1.6] text-muted"
          >
            {content.cookies.description}{" "}
            <Link
              href="/privacidade"
              className="font-medium text-primary underline underline-offset-[3px]"
            >
              {content.cookies.privacy}
            </Link>
          </p>
        </div>

        <div className="flex shrink-0 gap-3 max-[760px]:flex-col">
          <button
            type="button"
            className={cn(
              buttonSecondary,
              "border-[rgba(17,24,39,0.22)] bg-white",
              actionButton,
            )}
            onClick={() => decide("essential")}
          >
            {content.cookies.essential}
          </button>
          <button
            type="button"
            className={cn(
              buttonPrimary,
              "shadow-[0_12px_24px_rgba(90,0,227,0.18)]",
              actionButton,
            )}
            onClick={() => decide("all")}
          >
            {content.cookies.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
