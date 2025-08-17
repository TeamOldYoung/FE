import MessageItem from "./MessageItem";
import type { Message } from "..";

interface Props {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

const ChatBoard = ({ messages, messagesEndRef }: Props) => {
  return (
    <div className="flex-1 overflow-y-auto px-5 py-2 space-y-4 whitespace-pre-line custom-scrollbar">
      {messages.map((msg) => (
        <MessageItem key={msg.id} message={msg} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatBoard;
