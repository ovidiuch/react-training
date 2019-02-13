import React from "react";
import { connect } from "react-redux";
import { QuestionList } from "../style";
// import { storeAnswers } from "../localPersist"
import { ActiveQuestion, PastQuestion, FutureQuestion } from "./Question";
import QuizLayout from "./QuizLayout";

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveQuiz);

function mapStateToProps({ template, answers }) {
  return { template, answers };
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswerChange: (question, answer) => {
      dispatch({
        type: "CHANGE_ANSWER",
        payload: { question, answer }
      });
      // TODO: Persist answers in local storage
    }
  };
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
    </QuizLayout>
  );
}
