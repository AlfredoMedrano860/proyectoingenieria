import type { ReactNode } from "react";
import BackButton from "../ui/BackButton";

interface ScreenLayoutProps {
  title: string;
  onBack: () => void;
  children: ReactNode;
}

function ScreenLayout({ title, onBack, children }: ScreenLayoutProps) {
  return (
    <div className="h-screen bg-beige overflow-y-auto no-scrollbar">
      <div className="relative bg-primary px-6 pt-15 pb-16 text-center shadow-md">
        <div className="absolute top-4 left-0 z-10">
          <BackButton onClick={onBack} />
        </div>
        <h1 className="text-white text-xl font-bold">{title}</h1>
      </div>
      {children}
    </div>
  );
}

export default ScreenLayout;
