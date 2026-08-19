import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { COOKIE_PREFERENCES_EVENT } from "../cookie-consent/cookie-consent";
import CookiePreferencesButton from "./cookie-preferences-button";
import { content } from "../../content";

describe("CookiePreferencesButton", () => {
  it("emits the preferences event on click", async () => {
    const user = userEvent.setup();
    const listener = jest.fn();
    window.addEventListener(COOKIE_PREFERENCES_EVENT, listener);

    render(<CookiePreferencesButton />);
    await user.click(
      screen.getByRole("button", { name: content.cookies.preferences }),
    );

    expect(listener).toHaveBeenCalledTimes(1);
    window.removeEventListener(COOKIE_PREFERENCES_EVENT, listener);
  });
});
