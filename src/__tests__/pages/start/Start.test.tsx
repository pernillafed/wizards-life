import { fireEvent, render, RenderResult } from "@testing-library/react";
import AuthForm from "../../../pages/start/auth-form/AuthForm";
import Start from "../../../pages/start/Start";

jest.mock("../../../pages/start/auth-form/AuthForm");

describe(Start.name, () => {
    let start: RenderResult;

    const mockLoginForm = AuthForm as jest.MockedFunction<typeof AuthForm>;
    mockLoginForm.mockImplementation(() => <div data-testid="auth-form" />);

    beforeEach(() => {
        start = render(<Start />);
    })

    it("should render", () => {
        expect(start).toBeTruthy();
    });

    it("should initially render LoginForm", () => {
        expect(start.queryByTestId("auth-form")).toBeInTheDocument();
    });

    it("should render CreateAccountForm when link is clicked", async () => {
        const link = await start.findByTestId("switch-forms-link");

        fireEvent.click(link);

        expect(start.queryByTestId("auth-form")).toBeInTheDocument();
    });
});