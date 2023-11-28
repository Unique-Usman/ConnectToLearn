import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";

const botName = "ConnectToLearn";
const introMessage = `Hello there! I am ${botName}, and I am here to help you make the best of your projects. I am designed to leverage your completed courses, performance records, and areas of curiosity to suggest relevant projects. I can also connect you with the right people who can help validate and execute these projects, including faculty members, founders, NGOs, and organizations. Would you like to discuss project ideas or recommend faculty/founder mentors for your project?`;

const config = {
  initialMessages: [
    createChatBotMessage(introMessage, {
      widget: "options",
    }),
  ],
  botName: botName,
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
