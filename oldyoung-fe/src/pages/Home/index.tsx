import MyInfoCard from "./_components/MyInfoCard";
import MenuGrid from "./_components/MenuGrid";

interface HomePageProps {
  onNext: (to: "income" | "welfare" | "benefit" | "voice" | "harumi") => void;
}

const HomePage = ({ onNext }: HomePageProps) => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute left-0 right-0 px-5 mb-5 z-20" style={{ bottom: "52%" }}>
        <MyInfoCard onClickIncome={() => onNext("income")} />
      </div>

      <div className="absolute bottom-0 w-full h-[58%] bg-[#BBEFE9] rounded-t-[1.25rem] pt-15 p-5 z-10">
        <MenuGrid
          onSelect={(menu) => {
            if (menu === "복지 기관") onNext("welfare");
            if (menu === "내 혜택") onNext("benefit");
            if (menu === "음성 검색") onNext("voice");
            if (menu === "하루미") onNext("harumi");
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
