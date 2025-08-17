import { useState } from "react";
import FileIcon from "../../../assets/icons/FileIcon.svg?react";
import EmoticonIcon from "../../../assets/icons/Emoticon.svg?react";
import SearchIcon from "../../../assets/icons/SearchIcon.svg?react";

interface Props {
  onSend: (input: string) => void;
}

const ChatInput = ({ onSend }: Props) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="bg-[#F3EDF7] rounded-t-[0.75rem] p-4 flex items-center space-x-4">
      <FileIcon className="w-5 h-5 cursor-pointer" />
      <EmoticonIcon className="w-5 h-5 cursor-pointer" />

      <div className="relative flex-1">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="w-full p-4 pr-10 rounded-[1.75rem] bg-white outline-none"
          placeholder="메시지를 입력하세요..."
        />
        <SearchIcon
          onClick={handleSend}
          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ChatInput;
