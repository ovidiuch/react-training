import { retrieveAnswers, storeAnswers } from "./localPersist";

const initialAppState = {
  fetchingTemplate: true,
  template: null,
  answers: retrieveAnswers(),
  // TODO: Move submitted state to URL
  submittedQuiz: false
};

export function appStateReducer(prevState = initialAppState, action) {
  switch (action.type) {
    case "RECEIVE_TEMPLATE": {
      const { template } = action.payload;
      return {
        ...prevState,
        fetchingTemplate: false,
        template
      };
    }
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

function receiveTemplate(template) {
  return {
    type: "RECEIVE_TEMPLATE",
    payload: { template }
  };
}

export function fetchTemplate() {
  return dispatch => {
    setTimeout(() => {
      // TODO: Fetch template from server
      dispatch(
        receiveTemplate({
          name: "How was your day?",
          questions: [
            "Was it sunny?",
            "Was the food good?",
            "Was everyone friendly?"
          ]
        })
      );
    }, 2000);
  };
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
