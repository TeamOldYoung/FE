interface IncomePageProps {
  onBack: () => void;
}

const IncomePage = ({ onBack }: IncomePageProps) => {
  return (
    <div>
      IncomePage
      <button onClick={onBack}>뒤로 가기</button>
    </div>
  );
};

export default IncomePage;
