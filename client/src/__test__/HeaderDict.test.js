
import { render, screen } from "@testing-library/react";
import HeaderDict from "../components/HeaderDictionary/HeaderDict";



test("dictionary header", () => {
    render(<HeaderDict />);
});
// search input label
test("search input", () => {
    render(<HeaderDict/>)
    expect(screen.getByLabelText("Search a Word")).toBeInTheDocument()
});

render(
    <label>
        Language <input type="select" />
    </label>
);


