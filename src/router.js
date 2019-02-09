import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export function getIndexFromRouteParams({ index }) {
  return index !== undefined ? Number(index) : 0;
}

export function selectQuestion(questionIndex) {
  history.push(`/${questionIndex}`);
}
