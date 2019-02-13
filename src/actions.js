import { storeAnswers } from "./localPersist";
import { getTemplate } from "./db";

export function fetchTemplate() {
  return async (dispatch, getState) => {
    const template = await getTemplate();
    dispatch({
      type: "RECEIVE_TEMPLATE",
      payload: {
        template
      }
    });
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
