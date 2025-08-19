import { useState } from "react";
import ValidatedInput from "../../components/input/CommonInput";
import CommonHeader from "../../components/header/CommonHeader";
import ToggleButtonGroup from "./_components/ToggleButtonGroup";
import RadioGroup from "./_components/RadioGroup";

interface AnalyzePageProps {
  onBack: () => void;
}

const AnalyzePage = ({ onBack }: AnalyzePageProps) => {
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");
  const [familyCount, setFamilyCount] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [pension, setPension] = useState("");
  const [asset, setAsset] = useState("");
  const [debt, setDebt] = useState("");
  const [car, setCar] = useState("");
  const [job, setJob] = useState("");

  const [residence, setResidence] = useState("자가");
  const [disability, setDisability] = useState("없음"); 
  const [welfare, setWelfare] = useState("없음"); 

  return (
    <div className="flex flex-col h-full">
      <CommonHeader title="소득분위 분석" onBack={onBack} />

      <div className="flex-1 overflow-y-auto px-7 mt-11">
        <ValidatedInput
          label="생년월일"
          placeholder="YYYY/MM/DD"
          value={birth}
          onChange={setBirth}
          validator={(v) => /^\d{4}\/\d{2}\/\d{2}$/.test(v)}
        />

        <ValidatedInput
          label="주소"
          placeholder="주소 찾기"
          value={address}
          onChange={setAddress}
          validator={(v) => v.length > 5}
        />

        <ValidatedInput
          label="가구원 수"
          placeholder="함께 사는 가족 수(명)"
          value={familyCount}
          onChange={setFamilyCount}
          validator={(v) => /^[0-9]+$/.test(v)}
        />

        <ValidatedInput
          label="연간 근로소득"
          placeholder="연간 근로소득 입력(원)"
          value={annualIncome}
          onChange={setAnnualIncome}
          validator={(v) => /^[0-9,]+$/.test(v)}
        />

        <ValidatedInput
          label="기초 연금 소득"
          placeholder="월 기초 연금 소득 입력(원)"
          value={pension}
          onChange={setPension}
          validator={(v) => /^[0-9,]+$/.test(v)}
        />

        <ToggleButtonGroup
          label="거주 형태"
          options={["자가", "전세", "반전세", "월세"]}
          value={residence}
          onChange={setResidence}
        />

        <ValidatedInput
          label="자산 금액"
          placeholder="개인 총 자산 입력(원)"
          value={asset}
          onChange={setAsset}
          validator={(v) => /^[0-9,]+$/.test(v)}
        />

        <ValidatedInput
          label="부채 금액"
          placeholder="부채 총액 입력(원)"
          value={debt}
          onChange={setDebt}
          validator={(v) => /^[0-9,]+$/.test(v)}
        />

        <ValidatedInput
          label="자동차 정보"
          placeholder="차종 입력"
          value={car}
          onChange={setCar}
          validator={(v) => v.length > 1}
        />

        <RadioGroup
          label="장애 여부"
          options={["없음", "있음"]}
          value={disability}
          onChange={setDisability}
        />

        <ValidatedInput
          label="고용 상태"
          placeholder="무직/직장인/자영업/아르바이트 중 입력"
          value={job}
          onChange={setJob}
          validator={(v) => v.length > 1}
        />

        <RadioGroup
          label="과거 복지 수혜 이력"
          options={["없음", "있음"]}
          value={welfare}
          onChange={setWelfare}
        />
      </div>
    </div>
  );
};

export default AnalyzePage;
