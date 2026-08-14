"use client";

import { content } from "../content";
import { COOKIE_PREFERENCES_EVENT } from "./cookie-consent";

export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      className="cookie-preferences-button"
      onClick={() =>
        window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT))
      }
    >
      {content.cookies.preferences}
    </button>
  );
}
