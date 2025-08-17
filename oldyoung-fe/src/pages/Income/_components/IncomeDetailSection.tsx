import AnalyzeButton from "./AnalyzeButton";
import AnalyzeIcon from "../../../assets/icons/AnalyzeIcon.svg?react"; 

const IncomeDetailSection = () => {
  return (
    <div className="bg-white rounded-xl px-5 pt-10">
      <p className="text-[1.5rem] font-semibold px-2 mb-1">소득분위 상세정보</p>
      <p className="text-[1rem] text-[#4F4F4F] px-2 mb-8">
        아직 소득분위 분석을 완료하지 않았어요! 😔
      </p>

      <div className="relative w-full rounded-[0.75rem] px-12 flex flex-col items-center justify-center space-y-10 bg-white">
        <div className="pt-15">
          <AnalyzeIcon />
        </div>
        <AnalyzeButton />

        <svg
          className="absolute w-full h-full pointer-events-none"
          style={{ borderRadius: "0.75rem" }}
        >
          <rect
            x="4"
            y="4"
            width="calc(100% - 8px)"
            height="calc(100% - 8px)"
            rx="12"
            ry="12"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="3.5"
            strokeDasharray="16 20" 
          />
        </svg>
      </div>

    </div>
  );
};

export default IncomeDetailSection;
