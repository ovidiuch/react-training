import { storeAnswers } from "./localPersist";

export function fetchTemplate() {
  return async (dispatch, getState) => {
    // Fake 1s delay
    await new Promise(res => setTimeout(res, 1000));
    dispatch({
      type: "RECEIVE_TEMPLATE",
      payload: {
        template: {
          title: "How was your day?",
          subtitle: "Please answer the following questions",
          questions: [
            "Was it sunny?",
            "Was the food good?",
            "Was everyone nice?"
          ]
        }
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
