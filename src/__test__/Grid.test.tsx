import { Row, Column } from "@dfds-frontend/compass-ui";
import { render, screen } from "@testing-library/react";

test("should render grid", () => {
  render(
    <Row>
      <Column size="oneThird">foobar</Column>
      <Column size="oneThird">foobar</Column>
      <Column size="oneThird">foobar</Column>
    </Row>
  );

  expect(screen.getAllByRole("generic")).toHaveLength(5);
});
