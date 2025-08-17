import CommonHeader from "../../components/header/CommonHeader";

interface HarumiPageProps {
  onBack: () => void;
}

const HarumiPage = ({ onBack }: HarumiPageProps) => {
  return (
    <div className="w-full flex flex-col">
      <CommonHeader title="하루미" onBack={onBack} />

      <div className="mt-[3.25rem] px-[1.25rem]">
        내용
      </div>
    </div>
  );
};

export default HarumiPage;
