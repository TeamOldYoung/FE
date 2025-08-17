import { useEffect } from "react";
import CommonHeader from "../../components/header/CommonHeader";
import UserInfoSection from "./_components/UserInfoSection";
import IncomeDetailSection from "./_components/IncomeDetailSection.tsx";

interface IncomePageProps {
  onBack: () => void;
}

const IncomePage = ({ onBack }: IncomePageProps) => {
  const user = {
    name: "이름이",
    rank: "상위 n%",
    birth: "2001.10.10",
    email: "test@gmail.com",
    profileImg: null,
  };

  useEffect(() => {
    const meta = document.querySelector("meta[name=theme-color]");
    const prev = meta?.getAttribute("content");

    if (meta) {
      meta.setAttribute("content", "#2DC5B3");
    }

    return () => {
      if (meta && prev) {
        meta.setAttribute("content", prev);
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#2DC5B3] relative">
        <CommonHeader title="내 정보" onBack={onBack} colorClass="text-white" />
        <UserInfoSection user={user} />
      </div>

      <IncomeDetailSection />
    </div>
  );
};

export default IncomePage;
