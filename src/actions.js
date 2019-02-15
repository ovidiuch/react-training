import { storeAnswers } from "./localPersist";
import { getTemplate, submitAnswers } from "./db";
import { selectQuestion, showSubmittedPage } from "./router";

export const fetchTemplate = () => {
  return async (dispatch, getState) => {
    const template = await getTemplate();
    dispatch({
      type: "RECEIVE_TEMPLATE",
      payload: { template }
    });
  };
};

export const changeAnswer = (question, answer) => {
  return (dispatch, getState) => {
    dispatch({
      type: "CHANGE_ANSWER",
      payload: { question, answer }
    });
    storeAnswers(getState().answers);
  };
};

export const submitQuestion = activeQuestionIndex => {
  return (dispatch, getState) => {
    const { template, answers } = getState();
    const isLastQuestion =
      activeQuestionIndex === template.questions.length - 1;

    if (isLastQuestion) {
      showSubmittedPage();
      submitAnswers(answers);
    } else {
      selectQuestion(activeQuestionIndex + 1);
    }
  };
};
