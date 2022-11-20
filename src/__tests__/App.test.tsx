import App from "../App";
import { render, RenderResult } from "@testing-library/react";

describe(App.name, () => {
    let app: RenderResult;

    beforeEach(() => {
        app = render(<App />);
    });

    it("should render", () => {
        expect(app).toBeTruthy();
    });

    it("should render children", () => {
        expect(app.queryByTestId("navbar")).toBeInTheDocument();
        expect(app.queryByTestId("home")).toBeInTheDocument();
    });
});
