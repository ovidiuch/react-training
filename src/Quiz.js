import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ActiveQuestion, FutureQuestion, PastQuestion } from "./Question";
import {
  Header,
  Content,
  Title,
  Subtitle,
  QuestionList,
  SuccessMessage
} from "./style";
import { AppContext } from "./context";

export function DoneQuiz() {
  const { template, answers } = useContext(AppContext);

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
  activeQuestionIndex,
  setActiveQuestionIndex,
  onAnswerSubmit
}) {
  const { template, answers, setAnswers } = useContext(AppContext);

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
                  onAnswerChange={setAnswers}
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
        <Subtitle>{template.subtitle}</Subtitle>
      </Header>
      <Content>{children}</Content>
    </>
  );
}
