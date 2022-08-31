import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  render(<Card caption="test" currNum="1" src="test_src" totalNum="1"/>);
});

it("matches snapshot", function () {
  const { container } = render(<Card caption="test" currNum="1" src="test_src" totalNum="1"/>);
  expect(container).toMatchSnapshot();
});