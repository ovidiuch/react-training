const storageKey = `quizAnswers-${process.env.REACT_APP_TEMPLATE_ID}`;

export function storeAnswers(answers) {
  localStorage.setItem(storageKey, JSON.stringify(answers));
}

export function retrieveAnswers() {
  const quizAnswers = localStorage.getItem(storageKey);
  return quizAnswers ? JSON.parse(quizAnswers) : {};
}
