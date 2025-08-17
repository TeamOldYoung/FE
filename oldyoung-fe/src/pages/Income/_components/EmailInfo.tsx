interface EmailInfoProps {
  email: string;
}

const EmailInfo = ({ email }: EmailInfoProps) => {
  return (
    <div className="bg-[#D3F6F2] rounded-b-[0.75rem] font-medium text-[#474747] text-[1rem] p-3 mt-1 flex items-center justify-center space-x-10">
      <span>이메일</span>
      <p>{email}</p>
    </div>
  );
};

export default EmailInfo;
