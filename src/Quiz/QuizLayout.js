import React from "react";
import { Link } from "react-router-dom";

export default function QuizLayout({ children, template }) {
  return (
    <div>
      <h1>
        <Link to="/">{template.title}</Link>
      </h1>
      {children}
    </div>
  );
}
