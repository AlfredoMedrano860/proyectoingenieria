import type { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

function SectionCard({ children, className = "" }: SectionCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
}

export default SectionCard;
