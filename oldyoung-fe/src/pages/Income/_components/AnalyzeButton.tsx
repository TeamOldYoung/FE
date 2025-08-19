import { useFunnelContext } from "../../../contexts/FunnelContext";

const AnalyzeButton = () => {
  const funnel = useFunnelContext();

  return (
    <button
      className="w-full bg-[#2DC5B3] text-white text-[1.25rem] py-1.5 rounded-[1.25rem] font-semibold mb-15"
      onClick={() => funnel.history.push("analyze", {})}
    >
      분석 바로 하러가기
    </button>
  );
};

export default AnalyzeButton;
