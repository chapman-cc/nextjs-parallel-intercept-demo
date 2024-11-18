import { Button } from "@dfds-frontend/compass-ui";
import { render, screen } from "@testing-library/react";
test("should render button", () => {
  render(<Button />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
