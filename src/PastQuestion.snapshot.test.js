import React from "react";
import { create } from "react-test-renderer";
import { PastQuestion } from "./Question";

function renderComponent(onSelect) {
  return create(
    <PastQuestion
      question="How are you?"
      answer="Pretty good"
      onSelect={onSelect}
    />
  );
}

it("renders as expected", () => {
  expect(renderComponent()).toMatchInlineSnapshot(`
<div
  className="sc-EHOje eGfTNS"
>
  <h2
    className="sc-bZQynM dAnRBd"
  >
    How are you?
  </h2>
  <p
    className="sc-gzVnrw hodqon"
  >
    Pretty good
  </p>
</div>
`);
});
