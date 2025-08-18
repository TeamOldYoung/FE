import CommonHeader from "../../components/header/CommonHeader";
import WarningIcon from "../../assets/icons/Warning.svg?react";

interface VoicePageProps {
  onBack: () => void;
}

const VoicePage = ({ onBack }: VoicePageProps) => {
  return (
    <div className="w-full flex flex-col relative h-screen">
      <CommonHeader title="음성 검색" onBack={onBack} />

      <div className="mt-[3rem] px-[1.5rem] text-start text-[#4F4F4F] text-[1.125rem] font-medium">
        음성으로 손쉽게 필요한 기능을 찾아보세요 :)
      </div>

      <div className="fixed inset-0 bg-[#747775]/50 flex justify-center items-center z-50">
        <div className="mt-20 mx-[1.25rem] bg-white border-[#BBEFE9] rounded-[1.25rem] border-[3px] w-full px-12 py-9 sm:max-w-[393px] flex flex-col items-center">
          <div className="mb-5.5 mt-2.5">
            <WarningIcon />
          </div>
         
          <p className="text-center text-[1.25rem] mb-8.5 font-medium">
            아직 개발 중인 서비스입니다
          </p>

          <button
            className="w-full py-2 rounded-full bg-[#2DC5B3] text-[1.25rem] text-white font-semibold leading-[1.5rem]"
            onClick={onBack}
          >
            홈화면으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoicePage;
