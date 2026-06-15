import { navItems } from "../data/Navigation";

interface BottomNavProps {
  onNavigate: (screen: string) => void;
  currentScreen: string;
}

function BottomNav({ onNavigate, currentScreen }: BottomNavProps) {
  const activeIndex = navItems.findIndex(item => item.screen === currentScreen);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-primary rounded-full shadow-sm px-3 py-2.5 flex items-center gap-1 z-50">

      {/* Píldora deslizante */}
      <div
        style={{ '--i': activeIndex } as React.CSSProperties}
        className="nav-pill"
      />

      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = item.screen === currentScreen;

        return (
          <button
            key={item.id}
            onClick={() => item.screen && onNavigate(item.screen)}
            className={`relative z-10 px-4 py-2.5 flex items-center justify-center rounded-full active:scale-90 transition-transform duration-150 ${
              !isActive ? "hover:bg-white/10" : ""
            }`}
          >
            <Icon size={22} color="white" strokeWidth={1.8} />
          </button>
        );
      })}

    </nav>
  );
}

export default BottomNav;
