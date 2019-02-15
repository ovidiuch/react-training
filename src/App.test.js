import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import App from "./App";
import { history } from "./router";
import { submitAnswers } from "./db";

afterEach(() => {
  cleanup();
  history.push("/");
});

jest.mock("./db", () => ({
  getTemplate: () => ({
    title: "How was your day?",
    subtitle: "Please answer the following questions",
    questions: ["Was it rainy?", "Was the food good?"]
  }),
  submitAnswers: jest.fn()
}));

const renderComponent = () => {
  return render(<App />);
};

function changeInputValueByLabelText(renderer, labelText, inputValue) {
  fireEvent.change(renderer.getByLabelText(labelText), {
    target: { value: inputValue }
  });
}

function submitQuestionAnswer(renderer, question, answer) {
  changeInputValueByLabelText(renderer, question, answer);
  fireEvent.click(renderer.getByText("Next"));
}

it("renders template title", async () => {
  const { getByText } = renderComponent();
  await waitForElement(() => getByText("How was your day?"));
});

it("renders template subtitle", async () => {
  const { getByText } = renderComponent();
  await waitForElement(() =>
    getByText("Please answer the following questions")
  );
});

it("lists all template questions", async () => {
  const { getByText } = renderComponent();
  await waitForElement(() => getByText("Was it rainy?"));
  await waitForElement(() => getByText("Was the food good?"));
});

it("shows text field for first question", async () => {
  const { getByLabelText } = renderComponent();
  await waitForElement(() => getByLabelText("Was it rainy?"));
});

describe("after submitting the first question", () => {
  it("renders given answer", async () => {
    const renderer = renderComponent();
    submitQuestionAnswer(renderer, "Was it rainy?", "Yes it was");
    await waitForElement(() => renderer.getByText("Yes it was"));
  });

  it("shows text field for second question", async () => {
    const renderer = renderComponent();
    submitQuestionAnswer(renderer, "Was it rainy?", "Yes it was");
    await waitForElement(() => renderer.getByLabelText("Was the food good?"));
  });
});

describe("after submitting the second question", () => {
  it("renders all answers", async () => {
    const renderer = renderComponent();
    submitQuestionAnswer(renderer, "Was it rainy?", "Yes it was");
    submitQuestionAnswer(renderer, "Was the food good?", "Not really");
    await waitForElement(() => renderer.getByText("Yes it was"));
    await waitForElement(() => renderer.getByText("Not really"));
  });

  it("renders success message", async () => {
    const renderer = renderComponent();
    submitQuestionAnswer(renderer, "Was it rainy?", "Yes it was");
    submitQuestionAnswer(renderer, "Was the food good?", "Not really");
    await waitForElement(() => renderer.getByText("Thank you for your time!"));
  });

  it("sends answers to db", async () => {
    const renderer = renderComponent();
    submitQuestionAnswer(renderer, "Was it rainy?", "Yes it was");
    submitQuestionAnswer(renderer, "Was the food good?", "Not really");
    expect(submitAnswers).toBeCalledWith({
      "Was it rainy?": "Yes it was",
      "Was the food good?": "Not really"
    });
  });
});
