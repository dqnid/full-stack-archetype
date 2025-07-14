import { screen, render } from "@testing-library/react";
import { {{pascalCase name}} } from "./{{kebabCase name}}.view";

describe("{{pascalCase name}} view", () => {
    it("renders", () => {
        render(<{{pascalCase name}}/>);
        const element = screen.getByTestId("{{kebabCase name}}");
        expect(element).toBeInTheDocument();
    });
});
