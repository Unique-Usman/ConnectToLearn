import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const createMessage = (botResponse) => {
    const botMessage = createChatBotMessage(botResponse);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleMessage = async (message, url) => {
    // send a message to the server and update botResponse with the response
    let botResponse = { bot_message: "Sorry, there was some error." }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_message: message }),
      });
      botResponse = await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
    createMessage(botResponse.bot_message);
  }

  const handleProjectRecommender = () => {
    sessionStorage.setItem("model", "project_recommender");
    createMessage("Great! Do you already have a specific project idea or research topic in mind? If yes, please provide a brief description");
  };

  const handleMentorRecommender = () => {
    sessionStorage.setItem("model", "mentor_recommender");
    createMessage("Great! You can describe your idea / field of interest and I'll try to find the right people for you to connect with. Please specify whether you are looking for a founder or a professor.");
  };

  const handleOptionNotSelected = () => {
    const botMessage = createChatBotMessage("Please select one of the options to proceed.", {
      widget: "options",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            createMessage,
            handleMessage,
            handleProjectRecommender,
            handleMentorRecommender,
            handleOptionNotSelected,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
