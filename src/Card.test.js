import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Card caption="test" currNum="1" src="/static/media/image1.08e1519e765278b10548.jpg" totalNum="1" />);
});

it("matches snapshot", function () {
  const { container } = render(<Card caption="test" currNum="1" src="/static/media/image1.08e1519e765278b10548.jpg" totalNum="1" />);
  expect(container).toMatchSnapshot();
});