import {
  buttonBase,
  buttonPrimary,
  buttonSecondary,
  cardAccent,
  cardBase,
  cardText,
  cardTitle,
  cardWash,
  container,
  eyebrow,
  sectionAlt,
  sectionPad,
} from "./ui";

describe("ui tokens", () => {
  it("exports non-empty class strings", () => {
    const tokens = [
      container,
      buttonBase,
      buttonPrimary,
      buttonSecondary,
      eyebrow,
      sectionPad,
      sectionAlt,
      cardBase,
      cardTitle,
      cardText,
      cardAccent,
      cardWash,
    ];

    for (const token of tokens) {
      expect(token.length).toBeGreaterThan(0);
    }
  });
});
