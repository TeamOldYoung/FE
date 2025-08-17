import BotIcon from "../../../assets/icons/BotIcon.svg?react";
import type { Message } from "..";

interface Props {
  message: Message;
}

const MessageItem = ({ message }: Props) => {
  if (message.sender === "bot") {
    return (
      <div className="flex flex-col items-start space-y-1">
        <BotIcon className="w-8 h-8 shrink-0" />
        <div className="bg-[#F3F3F3] text-[1.125rem] font-normal px-3.5 py-3.5 rounded-[1rem] max-w-[284px]">
          {message.text}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-end mt-7">
      <div className="bg-[#2DC5B3] text-[1.125rem] text-white font-medium px-3.5 py-3.5 rounded-[1rem] max-w-[284px]">
        {message.text}
      </div>
    </div>
  );
};

export default MessageItem;
