import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./Quiz";

const TEMPLATE = {
  title: "How was your day?",
  questions: ["Was it sunny?", "Was the food good?", "Was everyone nice?"]
};

ReactDOM.render(<Quiz template={TEMPLATE} />, document.getElementById("root"));
