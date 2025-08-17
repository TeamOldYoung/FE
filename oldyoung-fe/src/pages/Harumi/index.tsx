interface HarumiPageProps {
  onBack: () => void;
}

const HarumiPage = ({ onBack }: HarumiPageProps) => {
  return (
    <div>
      HarumiPage
      <button onClick={onBack}>뒤로가기</button>
    </div>
  );
};

export default HarumiPage;
