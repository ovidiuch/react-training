import { retrieveAnswers } from "./localPersist";

const initialState = {
  fetchingTemplate: true,
  template: null,
  answers: retrieveAnswers()
};

export function appStateReducer(prevState = initialState, action) {
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
      const { answer, question } = action.payload;
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
