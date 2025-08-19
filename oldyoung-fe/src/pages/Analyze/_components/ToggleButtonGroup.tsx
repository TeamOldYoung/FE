interface ToggleButtonGroupProps {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

const ToggleButtonGroup = ({ label, options, value, onChange }: ToggleButtonGroupProps) => {
  return (
    <div className="mb-8 w-full px-2">
      <label className="block ml-0.5 mb-4 text-[1.125rem] text-[#4F4F4F] font-semibold leading-[1.125rem]">
        {label}
      </label>
      <div className="grid grid-cols-2 gap-2 justify-items-center">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`w-full py-5.5 rounded-[0.75rem] font-medium text-[1rem] border
              ${value === option 
                ? "bg-[#CBFAF4] border-[#2DC5B3] text-[#1BA19A]"  
                : "bg-[#F3F3F3] border-transparent text-[#777575]"} 
            `}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToggleButtonGroup;
