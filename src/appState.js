import { history } from "./routerHistory";

const initialAppState = {
  submittedQuiz: false,
  answers: history.location.state || {}
};

export function appStateReducer(prevState = initialAppState, action) {
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
    case "SUBMIT_QUIZ": {
      return {
        ...prevState,
        submittedQuiz: true
      };
    }
    default:
      return prevState;
  }
}

export function changeAnswer(question, answer) {
  return {
    type: "CHANGE_ANSWER",
    payload: { question, answer }
  };
}

export function submitQuiz() {
  return { type: "SUBMIT_QUIZ" };
}
