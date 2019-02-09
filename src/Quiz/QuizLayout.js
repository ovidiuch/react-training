import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTemplate } from "../actions";

function QuizLayout({ children, fetchingTemplate, template, onFetchTemplate }) {
  useEffect(() => onFetchTemplate(), []);

  if (fetchingTemplate) {
    return <div>Fetching template...</div>;
  }

  return (
    <div>
      <h1>{template.name}</h1>
      {children(template)}
    </div>
  );
}

function mapStateToProps({ fetchingTemplate, template }) {
  return {
    fetchingTemplate,
    template
  };
}

const mapDispatchToProps = {
  onFetchTemplate: fetchTemplate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizLayout);
