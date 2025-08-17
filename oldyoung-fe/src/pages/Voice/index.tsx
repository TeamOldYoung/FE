interface VoicePageProps {
  onBack: () => void;
}

const VoicePage = ({ onBack }: VoicePageProps) => {
  return (
    <div>
      VoicePage
      <button onClick={onBack}>뒤로가기</button>
    </div>
  );
};

export default VoicePage;
