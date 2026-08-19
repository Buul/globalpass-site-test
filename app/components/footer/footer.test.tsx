import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "./footer";
import { COOKIE_PREFERENCES_EVENT } from "../cookie-consent/cookie-consent";
import { content } from "../../content";

describe("Footer", () => {
  it("renders contacts with the right link attributes", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toHaveAttribute("id", "contato");
    expect(screen.getByText(content.footer.tagline)).toBeInTheDocument();

    const mail = content.contact.items.find((item) => item.icon === "mail")!;
    const instagram = content.contact.items.find(
      (item) => item.icon === "instagram",
    )!;
    const phone = content.contact.items.find((item) => item.icon === "phone")!;

    expect(
      screen.getByRole("link", { name: `${mail.label}: ${mail.value}` }),
    ).not.toHaveAttribute("target");
    expect(
      screen.getByRole("link", {
        name: `${instagram.label}: ${instagram.value}`,
      }),
    ).toHaveAttribute("rel", "noopener noreferrer");
    expect(
      screen.getByRole("link", { name: `${phone.label}: ${phone.value}` }),
    ).toHaveAttribute("href", phone.href);

    expect(
      screen.getByRole("link", { name: content.footer.privacy }),
    ).toHaveAttribute("href", "/privacidade");
  });

  it("dispatches the cookie preferences event", async () => {
    const user = userEvent.setup();
    const listener = jest.fn();
    window.addEventListener(COOKIE_PREFERENCES_EVENT, listener);

    render(<Footer />);
    await user.click(
      screen.getByRole("button", { name: content.cookies.preferences }),
    );

    expect(listener).toHaveBeenCalledTimes(1);
    window.removeEventListener(COOKIE_PREFERENCES_EVENT, listener);
  });
});
