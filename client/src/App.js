import { useEffect } from "react";
import ChatBot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import config from "./chatbot/config";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const setUserID = () => {
    const newRandomID = uuidv4();
    sessionStorage.setItem("userID", newRandomID);
  };

  useEffect(() => {
    if (!sessionStorage.getItem("userID")) {
      setUserID();
    }
    const handleBeforeUnload = () => {
      const userID = sessionStorage.getItem("userID");
      if (userID) {
        // Send a request to the server to inform about the user leaving
        fetch(`/api/${userID}/leave`, {
          method: "POST",
        });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="App">
      <div style={{ maxWidth: "300px" }}>
        <ChatBot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default App;
