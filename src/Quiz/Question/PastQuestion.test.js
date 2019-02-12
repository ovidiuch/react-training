import React from "react";
import ReactTestRenderer from "react-test-renderer";
import PastQuestion from "./PastQuestion";

function getTestInstance(onSelect) {
  const testRenderer = ReactTestRenderer.create(
    <PastQuestion
      question="How are you doing?"
      answer="Pretty good"
      onSelect={onSelect}
    />
  );
  return testRenderer.root;
}

it("renders question", () => {
  const instance = getTestInstance();
  expect(instance.findByType("h2").children).toContain("How are you doing?");
});

it("renders answer", () => {
  const instance = getTestInstance();
  expect(instance.findByType("p").children).toContain("Pretty good");
});

it("calls select callback", () => {
  const onSelect = jest.fn();
  const instance = getTestInstance(onSelect);
  const containerProps = instance.findByType("div").props;
  containerProps.onClick();
  expect(onSelect).toBeCalled();
});
