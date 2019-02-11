import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import QuizLayout from "./QuizLayout";
import { PastQuestion } from "./Question";
import { QuestionList, SuccessMessage } from "../style";

function CompletedQuiz({ answers }) {
  return (
    <QuizLayout>
      {({ questions }) => {
        if (!hasCompletedQuestions(questions, answers)) {
          return <Redirect to="/" />;
        }

        return (
          <>
            <QuestionList>
              {questions.map((question, questionIndex) => (
                <li key={questionIndex}>
                  <PastQuestion
                    question={question}
                    answer={answers[question]}
                  />
                </li>
              ))}
            </QuestionList>
            <SuccessMessage>Thank you for your time!</SuccessMessage>
          </>
        );
      }}
    </QuizLayout>
  );
}

function hasCompletedQuestions(questions, answers) {
  return questions.reduce(
    (prev, curr) => prev && answers.hasOwnProperty(curr),
    true
  );
}

function mapStateToProps({ answers }) {
  return { answers };
}

export default connect(mapStateToProps)(CompletedQuiz);
