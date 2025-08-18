import LinkIcon from "../../../assets/icons/LinkIcon.svg?react";

export interface Benefit {
  id: number;
  title: string;
  description: string;
  organization: string[]; 
  reception: string;
  inquiry: string;    
  phone: string;      
  target: string;
}

const BenefitList = ({ benefits }: { benefits: Benefit[] }) => {
  return (
    <div className="px-[1.25rem] mt-[2.5rem] space-y-5 mb-11.5">
      {benefits.map((item) => (
        <div
          key={item.id}
          className="rounded-[1rem] border border-[3px] border-[#BBEFE9] px-5.5 py-5"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-[1.5rem] break-words max-w-[16ch] leading-[1.5rem]">
              {item.title}
            </h3>
            <button
                className="flex items-center gap-1 text-[1rem] text-[#2DC5B3] font-semibold leading-[1.5rem]"
            >
                <LinkIcon />
                바로가기
            </button>
          </div>

          <p className="font-medium text-[1.125rem] text-[#4F4F4F] mb-6 leading-[1.5rem]">
            {item.description}
          </p>

          <hr
            className="w-full"
            style={{
                border: "none",
                height: "1px",
                backgroundImage:
                "repeating-linear-gradient(90deg, #CFCFCF, #CFCFCF 9px, transparent 8px, transparent 16px)",
            }}
            />

          <div className="mt-6 text-[1.125rem] text-[#2D2D2D] font-semibold space-y-4">
            <p className="flex justify-between">
                <span className="text-[#777575]">신청기관</span>
                <span className="text-right break-words max-w-[16ch]">{item.organization}</span>
            </p>
            <p className="flex justify-between">
                <span className="text-[#777575]">접수기관</span>
                <span className="text-right break-words max-w-[16ch]">{item.reception}</span>
            </p>
            <p className="flex justify-between">
                <span className="text-[#777575]">전화문의</span>
                <span className="text-right break-words max-w-[16ch]">{item.phone}</span>
            </p>
            <p className="flex justify-between">
                <span className="text-[#777575]">지원대상</span>
                <span className="text-right break-words max-w-[16ch]">{item.target}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitList;
