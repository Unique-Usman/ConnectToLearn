import React from 'react';

const MessageParser = ({ children, actions }) => {

  const parse = async (message) => {
    const userID = sessionStorage.getItem('userID');
    const model = sessionStorage.getItem('model');

    // check if model option selected
    if (model === null) {
      actions.handleOptionNotSelected();
    }
    else {
      let url = `/api/${userID}/${model}`;
      // call the handleMessage function from the ActionProvider component
      actions.handleMessage(message, url);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions
        });
      })}
    </div>
  );
};

export default MessageParser;