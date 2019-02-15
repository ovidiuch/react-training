import { storeAnswers } from "./localPersist";

const QUIZ_TEMPLATE = {
  title: "How was your day?",
  subtitle: "Please answer these questions",
  questions: ["Was it sunny?", "Was the food good?", "Was everyone friendly?"]
};

export const createFetchTemplateAction = () => {
  return async (dispatch, getState) => {
    const template = await new Promise(resolve => {
      setTimeout(() => {
        resolve(QUIZ_TEMPLATE);
      }, 500);
    });
    dispatch({
      type: "RECEIVE_TEMPLATE",
      payload: { template }
    });
  };
};

export const createChangeAnswerAction = (question, answer) => {
  return (dispatch, getState) => {
    dispatch({
      type: "CHANGE_ANSWER",
      payload: { question, answer }
    });
    storeAnswers(getState().answers);
  };
};
