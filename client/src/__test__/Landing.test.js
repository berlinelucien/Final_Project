
import { render, screen } from "@testing-library/react";
import Landing from "../components/LandingView/Landing";

test("renders the landing page", () => {
    render(<Landing />);

    //main picture on landing
    expect(screen.getByAltText("header_img")).toBeInTheDocument();
    // logo picture on navBar
    expect(screen.getByAltText("app__logo")).toBeInTheDocument();
    expect(screen.getByText("Reference tool for students")).toBeInTheDocument();
});