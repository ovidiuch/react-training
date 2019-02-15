import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export function getQuestionIndexFromRouteParams({ index }) {
  return index !== undefined ? Number(index) : 0;
}

export function selectQuestion(questionIndex) {
  history.push(`/${questionIndex}`);
}

export function showSubmittedPage() {
  history.push(`/done`);
}
