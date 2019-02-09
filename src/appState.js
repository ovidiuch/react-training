import { retrieveAnswers, storeAnswers } from "./localPersist";
import { selectQuestion, showSubmittedPage } from "./router";

const initialAppState = {
  fetchingTemplate: true,
  template: null,
  answers: retrieveAnswers()
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
    default:
      return prevState;
  }
}

export function fetchTemplate() {
  return dispatch => {
    setTimeout(() => {
      // TODO: Fetch template from server
      dispatch(
        createReceiveTemplateAction({
          name: "How was your day?",
          questions: [
            "Was it sunny?",
            "Was the food good?",
            "Was everyone friendly?"
          ]
        })
      );
    }, 500);
  };
}

export function changeAnswer(question, answer) {
  return (dispatch, getState) => {
    dispatch(createChangeAnswerAction(question, answer));
    storeAnswers(getState().answers);
  };
}

export function submitAnswer(activeQuestionIndex) {
  return (dispatch, getState) => {
    const { questions } = getState().template;
    const lastQuestion = activeQuestionIndex === questions.length - 1;

    if (lastQuestion) {
      // TODO: Store answers in db
      showSubmittedPage();
    } else {
      selectQuestion(activeQuestionIndex + 1);
    }
  };
}

function createReceiveTemplateAction(template) {
  return {
    type: "RECEIVE_TEMPLATE",
    payload: { template }
  };
}

function createChangeAnswerAction(question, answer) {
  return {
    type: "CHANGE_ANSWER",
    payload: { question, answer }
  };
}
