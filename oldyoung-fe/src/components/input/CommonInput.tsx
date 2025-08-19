import { useState } from "react";
import CheckIcon from "../../assets/icons/Check.svg?react";

interface ValidatedInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  validator?: (v: string) => boolean;
}

const ValidatedInput = ({ label, placeholder, value, onChange, validator }: ValidatedInputProps) => {
  const [touched, setTouched] = useState(false);

  const isValid = validator ? validator(value) : true;
  const hasValue = value.trim() !== "";
  const showError = touched && hasValue && !isValid;   // ✅ 값이 있을 때만 에러
  const showSuccess = touched && hasValue && isValid; // ✅ 값이 있고 유효하면 성공

  const baseClasses =
    "w-full rounded-lg px-4 py-3 text-base outline-none transition-colors";

  const inputClasses = !hasValue
    ? `${baseClasses} bg-[#F3F3F3] border-none` // 기본 상태
    : showError
    ? `${baseClasses} border border-[#FF3333] bg-white` // 에러 상태
    : showSuccess
    ? `${baseClasses} border border-[#2DC5B3] bg-[#F3F3F3]` // 성공 상태
    : `${baseClasses} border border-gray-300 bg-[#F3F3F3]`; // 값은 있지만 아직 터치된 상태(중립)

  return (
    <div className="mb-8">
      <label className="block ml-2.5 mb-4 text-[1.125rem] text-[#4F4F4F] font-semibold leading-[1.125rem]">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setTouched(true)}
          className={inputClasses}
        />
        {showSuccess && (
          <CheckIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2DC5B3]" />
        )}
      </div>
      {showError && (
        <p className="text-[#FF3333] text-xs mt-1">* 잘못된 입력입니다</p>
      )}
    </div>
  );
};

export default ValidatedInput;
