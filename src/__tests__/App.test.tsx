import App from "../App";
import { render, RenderResult } from "@testing-library/react";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";

jest.mock("../components/navbar/Navbar");
jest.mock("../pages/home/Home");

describe(App.name, () => {
    let app: RenderResult;

    const mockNavbar = Navbar as jest.MockedFunction<typeof Navbar>;
    mockNavbar.mockImplementation(() => <div data-testid="navbar" />);

    const mockHome = Home as jest.MockedFunction<typeof Home>;
    mockHome.mockImplementation(() => <div data-testid="home" />);

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
