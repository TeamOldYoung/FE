interface BenefitPageProps {
  onBack: () => void;
}

const BenefitPage = ({ onBack }: BenefitPageProps) => {
  return (
    <div>
      BenefitPage
      <button onClick={onBack}>뒤로가기</button>
    </div>
  );
};

export default BenefitPage;
