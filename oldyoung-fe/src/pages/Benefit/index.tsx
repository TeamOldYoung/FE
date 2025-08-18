import CommonHeader from "../../components/header/CommonHeader";
import BenefitEmpty from "./_components/BenefitEmpty";
import BenefitList, { type Benefit } from "./_components/BenefitList";
import DownIcon from "../../assets/icons/DownIcon.svg?react";
import { dummyBenefits } from "./_mocks/benefits";

interface BenefitPageProps {
  onBack: () => void;
  benefits?: Benefit[];
  onAgeFilter?: () => void;
  onRegionFilter?: () => void;
}

const BenefitPage = ({ onBack, benefits = dummyBenefits, onAgeFilter, onRegionFilter }: BenefitPageProps) => {
  const hasData = benefits && benefits.length > 0;

  return (
    <div className="w-full min-h-screen custom-scrollbar">
      <CommonHeader title="내 혜택" onBack={onBack} />

      <div className="mt-[3.25rem] px-[1.25rem]">
        <h2 className="text-[1.75rem] font-semibold leading-[1.75rem] mb-3">맞춤 혜택</h2>
        <p className="text-[1.25rem] font-medium text-[#4F4F4F] leading-[1.25rem]">소득분위에 맞는 혜택을 추천해드려요!</p>

        <div className="flex gap-2 mt-5">
          <button
            onClick={onAgeFilter}
            className="px-5 py-2.5 rounded-[1.25rem] text-[1rem] text-[#4F4F4F] leading-[1rem] bg-[#F3F3F3] flex items-center gap-1"
          >
            나이
            <DownIcon />
          </button>
          <button
            onClick={onRegionFilter}
            className="px-5 py-2.5 rounded-[1.25rem] text-[1rem] text-[#4F4F4F] leading-[1rem] bg-[#F3F3F3] flex items-center gap-1"
          >
            지역
            <DownIcon />
          </button>
        </div>
      </div>

      {!hasData ? <BenefitEmpty /> : <BenefitList benefits={benefits!} />}
    </div>
  );
};

export default BenefitPage;
