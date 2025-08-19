import RadioIcon from "../../../assets/icons/Radio.svg?react";
import RadioIconSelected from "../../../assets/icons/RadioSelected.svg?react";

interface RadioGroupProps {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

const RadioGroup = ({ label, options, value, onChange }: RadioGroupProps) => {
  return (
    <div className="mb-8 w-full">
      <label className="block ml-2.5 mb-4 text-[1.125rem] text-[#4F4F4F] font-semibold leading-[1.125rem]">
        {label}
      </label>
      <div className="flex justify-center gap-20 py-[1rem]">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className="flex items-center gap-2.5"
          >
            {value === option ? <RadioIconSelected /> : <RadioIcon />}
            <span className="text-[1rem] text-[#4F4F4F] leading-[1.75rem]">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
