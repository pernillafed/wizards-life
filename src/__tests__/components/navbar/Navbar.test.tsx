import { render, RenderResult } from "@testing-library/react";
import Navbar from "../../../components/navbar/Navbar";

describe(Navbar.name, () => {
    let navbar: RenderResult;

    beforeEach(() => {
        navbar = render(<Navbar />);
    });

    it("should render", () => {
        expect(navbar).toBeTruthy();
    });
});