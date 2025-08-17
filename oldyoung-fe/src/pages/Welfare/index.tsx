interface WelfarePageProps {
  onBack: () => void;
}

const WelfarePage = ({ onBack }: WelfarePageProps) => {
  return (
    <div>
      WelfarePage
      <button onClick={onBack}>뒤로가기</button>
    </div>
  );
};

export default WelfarePage;
