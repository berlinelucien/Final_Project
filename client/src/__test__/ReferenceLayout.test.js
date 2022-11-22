import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ReferenceLayout from "../components/ReferenceCard/ReferenceLayout"


test("reference title layout", () => {
    render(<ReferenceLayout />);
    expect(screen.getByText("Reference skin condition on black/brown patients")).toBeInTheDocument()
});

test("search input", () => {
    render(<ReferenceLayout />);
    expect(screen.getByPlaceholderText("Search Condition")).toBeInTheDocument()
});

// testing API to skin condition db
describe("skin condition", () => {
    let originFetch;
    beforeEach(() => {
        originFetch = (global).fetch;
    });
    afterEach(() => {
        (global).fetch = originFetch;
    });
    it('should pass', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(<ReferenceLayout />)
        });
        const fakeResponse = { title: "Test" }
        const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
        const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
        global.fetch = mockedFetch;
    });
})