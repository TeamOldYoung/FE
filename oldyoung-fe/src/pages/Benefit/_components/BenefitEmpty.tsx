import WarningIcon from "../../../assets/icons/Warning.svg?react"

const BenefitEmpty = () => {
  return (
    <div className="flex flex-col mt-8 h-full px-5">
      <div className="border-[#BBEFE9] rounded-[1.25rem] border-[3px] w-full p-11.5 flex flex-col items-center">
          <div className="mb-5.5 mt-2.5">
            <WarningIcon />
          </div>
         
          <p className="text-center text-[1.25rem] mb-8 font-medium leading-[1.75rem]">
            먼저, 서비스 이용하기 위해<br />내 정보에서 소득분위 분석을<br />진행해주세요
          </p>

          <button
            className="w-full py-2 rounded-full bg-[#2DC5B3] text-[1.25rem] text-white font-semibold leading-[1.5rem]"
            onClick={() => {}}
          >
            내 정보 바로가기
          </button>
        </div>
    </div>
  );
};

export default BenefitEmpty;
