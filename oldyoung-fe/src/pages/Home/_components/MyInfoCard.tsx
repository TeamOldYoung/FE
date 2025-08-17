import MyHomeIcon from "../../../assets/icons/MyHomeIcon.svg?react";
import NextIcon from "../../../assets/icons/NextIcon.svg?react";
import OldYoungCharacter from "../../../assets/icons/OldyoungCharacter.svg?react";
import Oldyoung from "../../../assets/icons/Oldyoung.svg?react";

const MyInfoCard = () => {
  return (
    <div className="relative bg-[#2CC3A3] rounded-[1rem] px-10 py-9 h-[12.125rem] text-white flex flex-col justify-end">
      <div className="absolute -top-37 left-0 w-full flex items-center justify-between px-3">
        <div className="flex flex-col items-start text-left">
          <Oldyoung className="w-[9rem] h-[2rem] text-[#1C9183] mb-10" />

          <p className="font-semibold text-[1.125rem] text-[#4F4F4F] leading-[1.5rem] mb-5">
            복잡한 정보 대신, <br />
            <span className="text-[#1A7268]">올영</span>이 찾아드립니다
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="absolute w-[22rem] h-[22rem] rounded-full 
                      bg-[radial-gradient(circle,_rgba(106,230,216,0.4)_0%,_rgba(106,230,216,0)_70%)] 
                      z-0"
          />
          <OldYoungCharacter className="relative z-10 w-[11rem] h-[11rem]" />
        </div>
      </div>

      <div className="flex w-full h-full items-end">
        <div className="flex-shrink-0 text-[#2CC3A3] flex items-center justify-center mr-8">
          <MyHomeIcon />
        </div>

        <div className="flex-1 flex flex-col justify-end h-full">
          <p className="font-bold text-[2rem]">내 정보</p>
          <div className="flex items-center justify-between mt-1">
            <p className="font-semibold text-[1.25rem]">소득분위 알아보기</p>
            <NextIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfoCard;
