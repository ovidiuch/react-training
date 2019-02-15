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

it("renders question", () => {
  const renderer = renderComponent();
  const headerChildren = renderer.root.findByType("h2").props.children;
  expect(headerChildren).toBe("How are you?");
});

it("renders answer", () => {
  const renderer = renderComponent();
  const pChildren = renderer.root.findByType("p").props.children;
  expect(pChildren).toBe("Pretty good");
});

it("calls onSelect on click", () => {
  const onSelect = jest.fn();
  const renderer = renderComponent(onSelect);
  const container = renderer.root.findByType("div");
  container.props.onClick();
  expect(onSelect).toBeCalled();
});
