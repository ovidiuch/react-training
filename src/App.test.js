import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  waitForElement
} from "react-testing-library";
import { configureStore } from "./store";
import { history } from "./router";
import { submitAnswers } from "./db";
import App from "./App";

jest.mock("./db", () => ({
  getTemplate: () => ({
    title: "Test template",
    subtitle: "This is a test template",
    questions: ["What's up?", "Do you even test?"]
  }),
  submitAnswers: jest.fn()
}));

afterEach(() => {
  cleanup();
  history.push("/");
});

function renderApp() {
  return render(<App store={configureStore()} />);
}

async function getActiveTextField(renderer, currentQuestion) {
  return waitForElement(() => renderer.getByLabelText(currentQuestion));
}

async function typeAnswer(renderer, question, answer) {
  const textField = await getActiveTextField(renderer, question);
  fireEvent.change(textField, { target: { value: answer } });
}

async function submitFirstQuestion(renderer) {
  await typeAnswer(renderer, "What's up?", "Nothing much");
  fireEvent.click(renderer.getByText("Next"));
}

async function submitSecondQuestion(renderer) {
  await typeAnswer(renderer, "Do you even test?", "Of course");
  fireEvent.click(renderer.getByText("Submit"));
}

it("renders template title", async () => {
  const { getByText } = renderApp();
  await waitForElement(() => getByText("Test template"));
});

it("renders template subtitle", async () => {
  const { getByText } = renderApp();
  await waitForElement(() => getByText("This is a test template"));
});

it("lists all template questions", async () => {
  const { getByText } = renderApp();
  await waitForElement(() => getByText("What's up?"));
  await waitForElement(() => getByText("Do you even test?"));
});

it("shows text field for the first question", async () => {
  const renderer = renderApp();
  await getActiveTextField(renderer, "What's up?");
});

describe("after submitting the first question", () => {
  it("shows answer to first question", async () => {
    const renderer = renderApp();
    await submitFirstQuestion(renderer);
    await waitForElement(() => renderer.getByText("Nothing much"));
  });

  it("shows text field for the second question", async () => {
    const renderer = renderApp();
    await submitFirstQuestion(renderer);
    await getActiveTextField(renderer, "Do you even test?");
  });
});

describe("after submitting both questions", () => {
  it("shows answer to second question", async () => {
    const renderer = renderApp();
    await submitFirstQuestion(renderer);
    await submitSecondQuestion(renderer);
    await waitForElement(() => renderer.getByText("Do you even test?"));
  });

  it("saves answers in db", async () => {
    const renderer = renderApp();
    await submitFirstQuestion(renderer);
    await submitSecondQuestion(renderer);
    expect(submitAnswers).toBeCalledWith({
      "What's up?": "Nothing much",
      "Do you even test?": "Of course"
    });
  });
});
