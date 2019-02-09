import React from "react";
import { connect } from "react-redux";
import QuizLayout from "./QuizLayout";
import { FutureQuestion } from "./Question";

function CompletedQuiz({ answers }) {
  return (
    <QuizLayout>
      {({ questions }) => (
        <>
          <ul>
            {questions.map((question, questionIndex) => (
              <li key={questionIndex}>
                <FutureQuestion
                  question={question}
                  answer={answers[question]}
                />
              </li>
            ))}
          </ul>
          <h2>Thanks for your time!</h2>
        </>
      )}
    </QuizLayout>
  );
}

function mapStateToProps({ answers }) {
  return { answers };
}

export default connect(mapStateToProps)(CompletedQuiz);
