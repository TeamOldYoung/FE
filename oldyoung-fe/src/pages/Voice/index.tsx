import CommonHeader from "../../components/header/CommonHeader";

interface VoicePageProps {
  onBack: () => void;
}

const VoicePage = ({ onBack }: VoicePageProps) => {
  return (
    <div className="w-full flex flex-col">
      <CommonHeader title="음성 검색" onBack={onBack} />

      <div className="mt-[3.25rem] px-[1.25rem]">
        내용
      </div>
    </div>
  );
};

export default VoicePage;
