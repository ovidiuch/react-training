import { appStateReducer } from "./appStateReducer";

it("adds template to state", () => {
  const initialState = {
    fetchingTemplate: true,
    template: null,
    answers: {}
  };
  const action = {
    type: "RECEIVE_TEMPLATE",
    payload: {
      template: { title: "Test template" }
    }
  };
  expect(appStateReducer(initialState, action)).toEqual({
    fetchingTemplate: false,
    template: { title: "Test template" },
    answers: {}
  });
});

it("updates answer in state", () => {
  const initialState = {
    fetchingTemplate: false,
    template: {},
    answers: {
      "Did you eat?": "Yes"
    }
  };
  const action = {
    type: "CHANGE_ANSWER",
    payload: {
      question: "How are you?",
      answer: "Good!"
    }
  };
  expect(appStateReducer(initialState, action)).toEqual({
    fetchingTemplate: false,
    template: {},
    answers: {
      "Did you eat?": "Yes",
      "How are you?": "Good!"
    }
  });
});
