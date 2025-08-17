import BackIcon from "../../assets/icons/BackIcon.svg?react";

interface CommonHeaderProps {
  title: string;
  onBack?: () => void;
  colorClass?: string;
}

const CommonHeader = ({ title, onBack, colorClass = "text-black" }: CommonHeaderProps) => {
  return (
    <div className={`w-full mt-10 flex items-center justify-center relative ${colorClass}`}>
      {onBack && (
        <button
          onClick={onBack}
          className="absolute left-0 pl-4 flex items-center"
        >
          <BackIcon />
        </button>
      )}

      <h1 className="text-[1.5rem] font-semibold text-center">{title}</h1>
    </div>
  );
};

export default CommonHeader;
