import CommonHeader from "../../components/header/CommonHeader";

interface IncomePageProps {
  onBack: () => void;
}

const IncomePage = ({ onBack }: IncomePageProps) => {
  return (
    <div className="w-full flex flex-col">
      <CommonHeader title="내 정보" onBack={onBack} />

      <div className="mt-[3.25rem] px-[1.25rem]">
        내용
      </div>
    </div>
  );
};

export default IncomePage;
