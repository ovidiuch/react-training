import { retrieveAnswers } from "./localPersist";

const initialState = {
  template: {
    title: "How was your day?",
    questions: ["Was it sunny?", "Was the food good?", "Was everyone nice?"]
  },
  answers: retrieveAnswers()
};

export function appStateReducer(prevState = initialState, action) {
  switch (action.type) {
    case "CHANGE_ANSWER":
      const { answer, question } = action.payload;
      return {
        ...prevState,
        answers: {
          ...prevState.answers,
          [question]: answer
        }
      };
    default:
      return prevState;
  }
}
