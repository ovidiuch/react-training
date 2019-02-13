import React from "react";
import { connect } from "react-redux";
import { PastQuestion } from "./Question";
import QuizLayout from "./QuizLayout";
import { QuestionList, SuccessMessage } from "../style";

export default connect(mapStateToProps)(DoneQuiz);

function mapStateToProps({ template, answers }) {
  return { template, answers };
}

function DoneQuiz({ template, answers }) {
  return (
    <QuizLayout template={template}>
      {template && (
        <QuestionList>
          {template.questions.map((question, index) => (
            <li key={index}>
              <PastQuestion question={question} answer={answers[question]} />
            </li>
          ))}
        </QuestionList>
      )}
      <SuccessMessage>Thank you for your time!</SuccessMessage>
    </QuizLayout>
  );
}
