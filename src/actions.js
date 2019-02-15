import { storeAnswers } from "./localPersist";

export const createChangeAnswerAction = (question, answer) => {
  return (dispatch, getState) => {
    dispatch({
      type: "CHANGE_ANSWER",
      payload: { question, answer }
    });
    storeAnswers(getState().answers);
  };
};
