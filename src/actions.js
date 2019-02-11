import { getTemplate, submitAnswers } from "./db";
import { storeAnswers } from "./localPersist";
import { selectQuestion, showSubmittedPage } from "./router";

export function fetchTemplate() {
  return async dispatch => {
    const template = await getTemplate(process.env.REACT_APP_TEMPLATE_ID);
    dispatch(createReceiveTemplateAction(template));
  };
}

export function changeAnswer(question, answer) {
  return (dispatch, getState) => {
    dispatch(createChangeAnswerAction(question, answer));
    storeAnswers(getState().answers);
  };
}

export function submitAnswer(activeQuestionIndex) {
  return async (dispatch, getState) => {
    const { template, answers } = getState();
    const lastQuestion = activeQuestionIndex === template.questions.length - 1;

    if (lastQuestion) {
      await submitAnswers(answers);
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
