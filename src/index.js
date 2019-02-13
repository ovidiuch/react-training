import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ActiveQuiz, DoneQuiz } from "./Quiz";

const TEMPLATE = {
  title: "How was your day?",
  questions: ["Was it sunny?", "Was the food good?", "Was everyone nice?"]
};

function App() {
  const [answers, setAnswers] = useState({});

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/done"
          component={() => <DoneQuiz template={TEMPLATE} answers={answers} />}
        />
        <Route
          path="/:index*"
          component={({ match, history }) => (
            <ActiveQuiz
              template={TEMPLATE}
              activeQuestionIndex={getIndexFromRouterParams(match.params)}
              selectQuestion={index => history.push(`/${index}`)}
              showDonePage={index => history.push(`/done`)}
              answers={answers}
              setAnswers={setAnswers}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

function getIndexFromRouterParams({ index }) {
  return index !== undefined ? Number(index) : 0;
}

ReactDOM.render(<App />, document.getElementById("root"));
