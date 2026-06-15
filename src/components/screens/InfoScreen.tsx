import { useState } from "react";
import { infoItems } from "../data/InfoItem";
import InfoContent from "../templates/InfoContent";

interface InfoScreenProps {
  onFinish: () => void;
}

function InfoScreen({ onFinish }: InfoScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    if (currentIndex < infoItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish();
    }
  }

  return (
    <InfoContent
      item={infoItems[currentIndex]}
      currentIndex={currentIndex}
      total={infoItems.length}
      onNext={handleNext}
      onSkip={onFinish}
    />
  );
}

export default InfoScreen;
