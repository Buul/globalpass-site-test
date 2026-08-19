"use client";

import { content } from "../../content";
import { COOKIE_PREFERENCES_EVENT } from "../cookie-consent/cookie-consent";

export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      className="mt-[18px] cursor-pointer border-0 bg-transparent p-0 font-[inherit] text-[0.85rem] text-white/70 underline underline-offset-[3px] transition-colors duration-200 hover:text-white"
      onClick={() =>
        window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT))
      }
    >
      {content.cookies.preferences}
    </button>
  );
}
