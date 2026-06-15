import type { ReactNode } from "react";

interface CardLayoutProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

function CardLayout({ children, className = "", onClick }: CardLayoutProps) {
  const base = "bg-white rounded-3xl p-3 border border-transparent hover:border-[hsl(54,80%,63%)] transition shadow-sm";

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${base} flex flex-col gap-3 w-full text-left ${className}`}>
        {children}
      </button>
    );
  }

  return (
    <div className={`${base} flex flex-col gap-3 ${className}`}>
      {children}
    </div>
  );
}

export default CardLayout;
