import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ActiveQuestion, FutureQuestion, PastQuestion } from "./Question";
import {
  Header,
  Content,
  Title,
  Subtitle,
  QuestionList,
  SuccessMessage
} from "./style";
import { createFetchTemplateAction, createChangeAnswerAction } from "./actions";

export function DoneQuiz() {
  return (
    <ConnectedQuiz
      content={({ template, answers }) => (
        <>
          <QuestionList>
            {template.questions.map((question, index) => {
              return (
                <li key={index}>
                  <PastQuestion
                    question={question}
                    answer={answers[question]}
                  />
                </li>
              );
            })}
          </QuestionList>
          <SuccessMessage>Thank you for your time!</SuccessMessage>
        </>
      )}
    />
  );
}

export function ActiveQuiz({
  activeQuestionIndex,
  setActiveQuestionIndex,
  onAnswerSubmit
}) {
  return (
    <ConnectedQuiz
      content={({ template, answers, onAnswerChange }) => (
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
                    onAnswerSubmit={() => onAnswerSubmit(template)}
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
      )}
    />
  );
}

class Quiz extends React.Component {
  componentDidMount() {
    this.props.onFetchTemplate();
  }

  render() {
    const {
      fetchingTemplate,
      template,
      answers,
      onAnswerChange,
      content
    } = this.props;

    if (fetchingTemplate) {
      return (
        <Header>
          <Title>Loading...</Title>
          <Subtitle>One moment</Subtitle>
        </Header>
      );
    }

    return (
      <>
        <Header>
          <Title>
            <Link to="/">{template.title}</Link>
          </Title>
          <Subtitle>{template.subtitle}</Subtitle>
        </Header>
        <Content>{content({ template, answers, onAnswerChange })}</Content>
      </>
    );
  }
}

const mapStateToProps = state => ({
  fetchingTemplate: state.fetchingTemplate,
  template: state.template,
  answers: state.answers
});

const mapDispatchToProps = {
  onFetchTemplate: createFetchTemplateAction,
  onAnswerChange: createChangeAnswerAction
};

const ConnectedQuiz = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
