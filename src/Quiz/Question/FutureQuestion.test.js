import React from "react";
import ReactTestRenderer from "react-test-renderer";
import FutureQuestion from "./FutureQuestion";

it("renders question", () => {
  const testRenderer = ReactTestRenderer.create(
    <FutureQuestion question="How are you doing?" />
  );
  expect(testRenderer.toJSON()).toMatchInlineSnapshot(`
<div
  className="sc-EHOje jjhiCI"
>
  <h2
    className="sc-bZQynM dAnRBd"
  >
    How are you doing?
  </h2>
</div>
`);
});
