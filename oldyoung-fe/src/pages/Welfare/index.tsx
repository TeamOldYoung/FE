import CommonHeader from "../../components/header/CommonHeader";

interface WelfarePageProps {
  onBack: () => void;
}

const WelfarePage = ({ onBack }: WelfarePageProps) => {
  return (
    <div className="w-full flex flex-col">
      <CommonHeader title="복지기관" onBack={onBack} />

      <div className="mt-[3.25rem] px-[1.25rem]">
        WelfarePage 내용
      </div>
    </div>
  );
};

export default WelfarePage;
