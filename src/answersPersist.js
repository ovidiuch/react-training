export function storeAnswers(answers) {
  localStorage.setItem("quizAnswers", JSON.stringify(answers));
}

export function retrieveAnswers() {
  const quizAnswers = localStorage.getItem("quizAnswers");
  return quizAnswers ? JSON.parse(quizAnswers) : {};
}
