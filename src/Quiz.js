import React from "react";
import { Link } from "react-router-dom";
import { ActiveQuestion, FutureQuestion, PastQuestion } from "./Question";
import { Header, Content, Title, QuestionList, SuccessMessage } from "./style";

export function DoneQuiz({ template, answers }) {
  return (
    <QuizLayout template={template}>
      <QuestionList>
        {template.questions.map((question, index) => {
          return (
            <li key={index}>
              <PastQuestion question={question} answer={answers[question]} />
            </li>
          );
        })}
      </QuestionList>
      <SuccessMessage>Thank you for your time!</SuccessMessage>
    </QuizLayout>
  );
}

export function ActiveQuiz({
  template,
  answers,
  activeQuestionIndex,
  setActiveQuestionIndex,
  onAnswerChange,
  onAnswerSubmit
}) {
  return (
    <QuizLayout template={template}>
      <QuestionList>
        {template.questions.map((question, index) => {
          const humanIndex = index + 1;
          return (
            <li key={index}>
              {humanIndex === activeQuestionIndex ? (
                <ActiveQuestion
                  question={question}
                  answer={answers[question]}
                  onAnswerChange={onAnswerChange}
                  onAnswerSubmit={onAnswerSubmit}
                />
              ) : humanIndex < activeQuestionIndex ? (
                <PastQuestion
                  question={question}
                  answer={answers[question]}
                  onSelect={() => setActiveQuestionIndex(humanIndex)}
                />
              ) : (
                <FutureQuestion question={question} />
              )}
            </li>
          );
        })}
      </QuestionList>
    </QuizLayout>
  );
}

function QuizLayout({ children, template }) {
  return (
    <>
      <Header>
        <Title>
          <Link to="/">{template.title}</Link>
        </Title>
      </Header>
      <Content>{children}</Content>
    </>
  );
}
