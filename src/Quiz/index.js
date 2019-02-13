import React from "react";
import { ActiveQuestion, PastQuestion, FutureQuestion } from "./Question";

export default class Quiz extends React.Component {
  state = {
    answers: {}
  };

  handleAnswerChange = (question, answer) => {
    this.setState({
      answers: {
        ...this.state.answers,
        [question]: answer
      }
    });
  };

  handleAnswerSubmit = () => {
    const { template, activeQuestionIndex, selectQuestion } = this.props;
    const isLastQuestion =
      activeQuestionIndex === template.questions.length - 1;

    if (isLastQuestion) {
      alert("Form submitted!");
    } else {
      selectQuestion(activeQuestionIndex + 1);
    }
  };

  render() {
    const { template, activeQuestionIndex } = this.props;
    const { answers } = this.state;

    return (
      <div>
        <h1>{template.title}</h1>
        <ul>
          {template.questions.map((question, index) => (
            <li key={index}>
              {index === activeQuestionIndex ? (
                <ActiveQuestion
                  question={question}
                  answer={answers[question]}
                  onChange={this.handleAnswerChange}
                  onSubmit={this.handleAnswerSubmit}
                />
              ) : index < activeQuestionIndex ? (
                <PastQuestion question={question} answer={answers[question]} />
              ) : (
                <FutureQuestion question={question} />
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
