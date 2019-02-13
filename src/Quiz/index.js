import React from "react";
import { ActiveQuestion, PastQuestion, FutureQuestion } from "./Question";

export default class Quiz extends React.Component {
  state = {
    activeQuestionIndex: 0,
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
    const { template } = this.props;
    const { activeQuestionIndex } = this.state;
    const isLastQuestion =
      activeQuestionIndex === template.questions.length - 1;

    if (isLastQuestion) {
      alert("Form submitted!");
    } else {
      this.setState({
        activeQuestionIndex: activeQuestionIndex + 1
      });
    }
  };

  render() {
    const { template } = this.props;
    const { activeQuestionIndex, answers } = this.state;

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
