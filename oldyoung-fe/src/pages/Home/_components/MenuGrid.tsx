import WelfareIcon from "../../../assets/icons/CareIcon.svg?react";
import BenefitIcon from "../../../assets/icons/BenefitIcon.svg?react";
import VoiceIcon from "../../../assets/icons/MicIcon.svg?react";
import HarumiIcon from "../../../assets/icons/AIIcon.svg?react";

const menus = [
  { title: "복지 기관", desc: "연위치 주변 기관 찾기", icon: <WelfareIcon /> },
  { title: "내 혜택", desc: "가능한 혜택 모아보기", icon: <BenefitIcon /> },
  { title: "음성 검색", desc: "음성으로 문제 해결", icon: <VoiceIcon /> },
  { title: "하루미", desc: "건강한 하루를 AI와 함께", icon: <HarumiIcon /> },
];


const MenuGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-5 h-full">
      {menus.map((menu) => (
        <div
          key={menu.title}
          className="bg-[#F9FAFB] rounded-[1rem] px-5 py-6 flex flex-col justify-between"
        >
          <div>
            <p className="font-semibold text-[1.5rem] text-[#1A7268]">{menu.title}</p>
            <p className="font-semibold text-[1rem] text-[#4F4F4F]">{menu.desc}</p>
          </div>

          <div className="flex justify-end">
            <div className="w-12 h-12">{menu.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;
