import React from "react";
import Quiz from "./Quiz";

const QUIZ = {
  title: "How was your day?",
  questions: ["Was it sunny?", "Was the food good?", "Was everyone friendly?"]
};

export default function App() {
  return <Quiz template={QUIZ} />;
}
