import { useState, useRef, useEffect } from "react";
import CommonHeader from "../../components/header/CommonHeader";
import ChatBoard from "./_components/ChatBoard";
import ChatInput from "./_components/ChatInput";

export interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
}

interface Props {
  onBack: () => void;
}

const HarumiPage = ({ onBack }: Props) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "안녕하세요, 하루미예요! 😉 \n 어르신을 위한 건강·복지 정보를 쉽게 알려드릴게요.", 
      sender: "bot" 
    },
    { id: 2, text: "원하는 정보를 물어봐주세요!", sender: "bot" },
  ]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (input: string) => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: input, sender: "user" },
    ]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: "네, 확인했습니다", sender: "bot" },
      ]);
    }, 800);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <CommonHeader title="하루미" onBack={onBack} />
      <div className="w-full h-[1px] bg-[#CFCFCF] mt-6 mb-8"/>
      <ChatBoard messages={messages} messagesEndRef={messagesEndRef} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default HarumiPage;
