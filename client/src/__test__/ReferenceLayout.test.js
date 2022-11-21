
import { render, screen } from "@testing-library/react";
import ReferenceLayout from "../components/ReferenceCard/ReferenceLayout"


test("reference title layout", () => {
    render(<ReferenceLayout />);
    expect(screen.getByText("Reference skin condition on black/brown patients")).toBeInTheDocument()
});