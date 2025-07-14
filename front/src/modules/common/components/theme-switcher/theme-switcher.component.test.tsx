import { screen, render } from "@testing-library/react";
import { ThemeSwitcher } from "./theme-switcher.component";

describe("theme-switcher", () => {
    beforeAll(() => {
        document.documentElement.setAttribute("data-theme", "light");
    });
    it("renders", () => {
        render(<ThemeSwitcher />);
        const element = screen.getByTestId("theme-switcher");
        expect(element).toBeInTheDocument();
    });
    it("changes the theme on click", () => {
        render(<ThemeSwitcher />);
        const element = screen.getByTestId("theme-switcher");
        expect(document.documentElement.getAttribute("data-theme")).toBe("light");
        element.click();
        expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
        element.click();
        expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    });
});
