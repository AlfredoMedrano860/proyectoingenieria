import type { ReactNode } from "react";
import AppLayout from "./AppLayout";
import AppHeader from "../templates/AppHeader";
import ProfileHeader from "../templates/ProfileHeader";
import BottomNav from "../ui/BottomNav";
import type { UserProfile } from "../data/UserProfile";

const headerScreens     = ["home", "marketplace", "favorite", "addproduct", "productdetail"];
const bottomNavScreens = ["home", "marketplace", "favorite", "addproduct", "settings"];

interface MainLayoutProps {
  screen: string;
  currentUser: UserProfile;
  onNavigate: (screen: string) => void;
  onSearch: (term: string) => void;
  children: ReactNode;
}

function MainLayout({ screen, currentUser, onNavigate, onSearch, children }: MainLayoutProps) {
  return (
    <div className="flex flex-col h-dvh overflow-hidden bg-beige">

      {headerScreens.includes(screen) && (
        <AppHeader currentUser={currentUser} onSearch={onSearch} />
      )}

      {screen === "settings" && (
        <ProfileHeader
          name={currentUser.username}
          email={currentUser.email}
          avatar={currentUser.avatar}
        />
      )}

      <AppLayout>
        {children}
      </AppLayout>

      {bottomNavScreens.includes(screen) && (
        <BottomNav onNavigate={onNavigate} currentScreen={screen} />
      )}

    </div>
  );
}

export default MainLayout;
