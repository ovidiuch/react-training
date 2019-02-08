import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

const quizTemplate = {
  name: "How was your day?",
  questions: ["Was it sunny?", "Was the food good?", "Was everyone friendly?"]
};

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/:index*" component={Quiz} />
    </BrowserRouter>
  );
}

function getIndexFromRouteParams({ index }) {
  return index !== undefined ? Number(index) : 0;
}

function Quiz({ history, match, location }) {
  const { name, questions } = quizTemplate;
  const activeQuestionIndex = getIndexFromRouteParams(match.params);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState(location.state || {});

  function handleAnswerChange(question, answer) {
    setAnswers({
      ...answers,
      [question]: answer
    });
  }

  function submitAnswer() {
    const lastQuestion = activeQuestionIndex === questions.length - 1;
    if (lastQuestion) {
      setSubmitted(true);
    } else {
      changeQuestion(activeQuestionIndex + 1);
    }
  }

  function changeQuestion(index) {
    history.push(`/${index}`, answers);
  }

  return (
    <div>
      <h1>{name}</h1>
      {submitted ? (
        <CompletedQuestionList questions={questions} answers={answers} />
      ) : (
        <ActiveQuestionList
          questions={questions}
          answers={answers}
          activeQuestionIndex={activeQuestionIndex}
          onAnswerChange={handleAnswerChange}
          onAnswerSubmit={submitAnswer}
          onQuestionChange={changeQuestion}
        />
      )}
    </div>
  );
}

function ActiveQuestionList({
  questions,
  answers,
  activeQuestionIndex,
  onAnswerChange,
  onAnswerSubmit,
  onQuestionChange
}) {
  return (
    <ul>
      {questions.map((question, questionIndex) => (
        <li key={questionIndex}>
          {questionIndex === activeQuestionIndex ? (
            <ActiveQuizQuestion
              question={question}
              answer={answers[question]}
              buttonLabel={
                activeQuestionIndex === questions.length - 1 ? "Submit" : "Next"
              }
              onChange={answer => onAnswerChange(question, answer)}
              onSubmit={onAnswerSubmit}
            />
          ) : questionIndex < activeQuestionIndex ? (
            <PastQuestion
              question={question}
              answer={answers[question]}
              onSelect={() => onQuestionChange(questionIndex)}
            />
          ) : (
            <FutureQuestion question={question} />
          )}
        </li>
      ))}
    </ul>
  );
}

function CompletedQuestionList({ questions, answers }) {
  return (
    <ul>
      {questions.map((question, questionIndex) => (
        <li key={questionIndex}>
          <PastQuestion question={question} answer={answers[question]} />
        </li>
      ))}
    </ul>
  );
}

function ActiveQuizQuestion({
  question,
  answer = "",
  buttonLabel,
  onChange,
  onSubmit
}) {
  function handleInputRef(inputEl) {
    if (inputEl) {
      inputEl.focus();
    }
  }

  return (
    <GreyForm
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <h2>{question}</h2>
      <input
        ref={handleInputRef}
        type="text"
        value={answer}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
      <button type="submit" disabled={!answer}>
        {buttonLabel}
      </button>
    </GreyForm>
  );
}

function GreyForm({ children, ...formProps }) {
  return (
    <form {...formProps} style={{ background: "#e1e1e1", padding: 10 }}>
      {children}
    </form>
  );
}

function PastQuestion({ question, answer, onSelect }) {
  return (
    <div onClick={onSelect}>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
}

function FutureQuestion({ question, answer }) {
  return (
    <div style={{ opacity: 0.5 }}>
      <h2>{question}</h2>
    </div>
  );
}
