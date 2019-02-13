import React from "react";
import { connect } from "react-redux";
import { QuestionList } from "../style";
import { changeAnswer } from "../actions";
import { ActiveQuestion, PastQuestion, FutureQuestion } from "./Question";
import QuizLayout from "./QuizLayout";

export default connect(
  mapStateToProps,
  { onAnswerChange: changeAnswer }
)(ActiveQuiz);

function mapStateToProps({ template, answers }) {
  return { template, answers };
}

function ActiveQuiz({
  template,
  answers,
  onAnswerChange,
  activeQuestionIndex,
  selectQuestion,
  showDonePage
}) {
  const handleAnswerSubmit = () => {
    const isLastQuestion =
      activeQuestionIndex === template.questions.length - 1;

    if (isLastQuestion) {
      showDonePage();
    } else {
      selectQuestion(activeQuestionIndex + 1);
    }
  };

  return (
    <QuizLayout template={template}>
      {template && (
        <QuestionList>
          {template.questions.map((question, index) => (
            <li key={index}>
              {index === activeQuestionIndex ? (
                <ActiveQuestion
                  question={question}
                  answer={answers[question]}
                  onChange={onAnswerChange}
                  onSubmit={handleAnswerSubmit}
                />
              ) : index < activeQuestionIndex ? (
                <PastQuestion
                  question={question}
                  answer={answers[question]}
                  onSelect={() => selectQuestion(index)}
                />
              ) : (
                <FutureQuestion question={question} />
              )}
            </li>
          ))}
        </QuestionList>
      )}
    </QuizLayout>
  );
}
