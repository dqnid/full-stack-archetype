import { screen, render } from "@testing-library/react";
import { {{pascalCase name}} } from "./{{kebabCase name}}.component";

describe("{{pascalCase name}} component", () => {
    it("renders", () => {
        render(<{{pascalCase name}}/>);
        const element = screen.getByTestId("{{kebabCase name}}");
        expect(element).toBeInTheDocument();
    });
});
