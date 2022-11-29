import App from "../App";
import { render, RenderResult } from "@testing-library/react";
import Navbar from "../components/navbar/Navbar";
import Start from "../pages/start/Start";

jest.mock("../components/navbar/Navbar");
jest.mock("../pages/start/Start");

describe(App.name, () => {
    let app: RenderResult;

    const mockNavbar = Navbar as jest.MockedFunction<typeof Navbar>;
    mockNavbar.mockImplementation(() => <div data-testid="navbar" />);

    const mockHome = Start as jest.MockedFunction<typeof Start>;
    mockHome.mockImplementation(() => <div data-testid="start" />);

    beforeEach(() => {
        app = render(<App />);
    });

    it("should render", () => {
        expect(app).toBeTruthy();
    });

    it("should render children", () => {
        expect(app.queryByTestId("navbar")).toBeInTheDocument();
        expect(app.queryByTestId("start")).toBeInTheDocument();
    });
});
