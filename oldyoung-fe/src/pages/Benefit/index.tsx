import CommonHeader from "../../components/header/CommonHeader";

interface BenefitPageProps {
  onBack: () => void;
}

const BenefitPage = ({ onBack }: BenefitPageProps) => {
  return (
    <div className="w-full flex flex-col">
      <CommonHeader title="내 혜택" onBack={onBack} />

      <div className="mt-[3.25rem] px-[1.25rem]">
        내용
      </div>
    </div>
  );
};

export default BenefitPage;
