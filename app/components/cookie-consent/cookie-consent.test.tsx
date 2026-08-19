import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CookieConsent, {
  COOKIE_PREFERENCES_EVENT,
} from "./cookie-consent";
import CookiePreferencesButton from "../cookie-preferences-button/cookie-preferences-button";
import { content } from "../../content";

const STORAGE_KEY = "globalpass:cookie-consent";

describe("CookieConsent", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("opens when there is no stored choice", async () => {
    render(<CookieConsent />);

    expect(
      await screen.findByRole("dialog", { name: content.cookies.title }),
    ).toBeInTheDocument();
  });

  it("stays closed when a valid choice is stored", async () => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status: "all" }),
    );

    render(<CookieConsent />);

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("treats malformed storage as no choice", async () => {
    window.localStorage.setItem(STORAGE_KEY, "{not-json");

    render(<CookieConsent />);

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
  });

  it("treats an unknown status as no choice", async () => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status: "maybe" }),
    );

    render(<CookieConsent />);

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
  });

  it("treats empty storage as no choice", async () => {
    window.localStorage.setItem(STORAGE_KEY, "");

    render(<CookieConsent />);

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
  });

  it("saves essential consent and closes", async () => {
    const user = userEvent.setup();
    render(<CookieConsent />);
    await screen.findByRole("dialog");

    await user.click(
      screen.getByRole("button", { name: content.cookies.essential }),
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(JSON.parse(window.localStorage.getItem(STORAGE_KEY)!).status).toBe(
      "essential",
    );
  });

  it("saves all consent even if storage writes fail", async () => {
    const user = userEvent.setup();
    jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("quota");
    });

    render(<CookieConsent />);
    await screen.findByRole("dialog");
    await user.click(
      screen.getByRole("button", { name: content.cookies.acceptAll }),
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    jest.restoreAllMocks();
  });

  it("reopens from the preferences event and cleans up the listener", async () => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status: "essential" }),
    );

    const { unmount } = render(<CookieConsent />);
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    act(() => {
      window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT));
    });
    expect(await screen.findByRole("dialog")).toBeInTheDocument();

    unmount();
    act(() => {
      window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT));
    });
  });

  it("opens the dialog when cookie preferences is clicked", async () => {
    const user = userEvent.setup();
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status: "all" }),
    );

    render(
      <>
        <CookieConsent />
        <CookiePreferencesButton />
      </>,
    );

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    await user.click(
      screen.getByRole("button", { name: content.cookies.preferences }),
    );

    expect(
      await screen.findByRole("dialog", { name: content.cookies.title }),
    ).toBeInTheDocument();
  });

  it("links to the privacy policy", async () => {
    render(<CookieConsent />);

    expect(
      await screen.findByRole("link", { name: content.cookies.privacy }),
    ).toHaveAttribute("href", "/privacidade");
  });
});
