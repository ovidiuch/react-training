import { retrieveAnswers, storeAnswers } from "./answersPersist";

const initialAppState = {
  submittedQuiz: false,
  answers: retrieveAnswers()
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
  return (dispatch, getState) => {
    dispatch({
      type: "CHANGE_ANSWER",
      payload: { question, answer }
    });
    storeAnswers(getState().answers);
  };
}

export function submitQuiz() {
  return { type: "SUBMIT_QUIZ" };
}