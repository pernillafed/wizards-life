import { render, RenderResult } from "@testing-library/react";
import Home from "../../../pages/home/Home";

describe(Home.name, () => {
    let home: RenderResult;

    beforeEach(() => {
        home = render(<Home />);
    });

    it("should render", () => {
        expect(home).toBeTruthy();
    });
});