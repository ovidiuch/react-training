import { retrieveAnswers } from "./localPersist";

const initialState = {
  template: {
    title: "How was your day?",
    subtitle: "Please answer these questions",
    questions: ["Was it sunny?", "Was the food good?", "Was everyone friendly?"]
  },
  answers: retrieveAnswers()
};

export function appStateReducer(prevState = initialState, action) {
  switch (action.type) {
    case "CHANGE_ANSWER": {
      const { question, answer } = action.payload;
      return {
        ...prevState,
        answers: {
          ...prevState.answers,
          [question]: answer
        }
      };
    }
    default:
      return prevState;
  }
}
