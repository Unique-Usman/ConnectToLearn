import React from "react";
import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Discuss Project Ideas",
      handler: props.actionProvider.handleProjectRecommender,
      id: 1,
    },
    {
      text: "Recommend Mentor",
      handler: props.actionProvider.handleMentorRecommender,
      id: 2,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
