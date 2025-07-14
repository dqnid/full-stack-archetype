import { screen, render } from "@testing-library/react";
import { NavbarHeader } from "./navbar-header.component";

describe("NavbarHeader", () => {
    beforeAll(() => {
        document.documentElement.setAttribute("data-theme", "light");
    });
    it("renders", () => {
        render(<NavbarHeader />);
        const element = screen.getByTestId("navbar-header");
        expect(element).toBeInTheDocument();
    });
});
