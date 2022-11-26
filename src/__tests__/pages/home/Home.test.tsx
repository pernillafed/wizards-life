import { fireEvent, render, RenderResult } from "@testing-library/react";
import CreateAccountForm from "../../../pages/home/create-account-form/CreateAccountForm";
import Home from "../../../pages/home/Home";
import LoginForm from "../../../pages/home/login-form/LoginForm";

jest.mock("../../../pages/home/login-form/LoginForm");
jest.mock("../../../pages/home/create-account-form/CreateAccountForm");

describe(Home.name, () => {
    let home: RenderResult;

    const mockLoginForm = LoginForm as jest.MockedFunction<typeof LoginForm>;
    mockLoginForm.mockImplementation(() => <div data-testid="login-form" />);

    const mockCreateAccountForm = CreateAccountForm as jest.MockedFunction<typeof CreateAccountForm>;
    mockCreateAccountForm.mockImplementation(() => <div data-testid="create-account-form" />);

    beforeEach(() => {
        home = render(<Home />);
    })

    it("should render", () => {
        expect(home).toBeTruthy();
    });

    it("should initially render LoginForm", () => {
        expect(home.queryByTestId("login-form")).toBeInTheDocument();
    });

    it("should render CreateAccountForm when link is clicked", async () => {
        const link = await home.findByTestId("switch-forms-link");

        fireEvent.click(link);

        expect(home.queryByTestId("create-account-form")).toBeInTheDocument();
    });
});