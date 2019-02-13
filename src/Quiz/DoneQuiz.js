import React, { useContext } from "react";
import { PastQuestion } from "./Question";
import QuizLayout from "./QuizLayout";
import { QuestionList, SuccessMessage } from "../style";
import { AnswersContext } from "../answersContext";

export default function DoneQuiz({ template }) {
  const { answers } = useContext(AnswersContext);

  return (
    <QuizLayout template={template}>
      <QuestionList>
        {template.questions.map((question, index) => (
          <li key={index}>
            <PastQuestion question={question} answer={answers[question]} />
          </li>
        ))}
      </QuestionList>
      <SuccessMessage>Thank you for your time!</SuccessMessage>
    </QuizLayout>
  );
}
