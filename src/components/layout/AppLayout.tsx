interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="flex-1 w-full bg-beige overflow-hidden">
      <div className="max-w-6xl mx-auto h-full">
        {children}
      </div>
    </main>
  );
}

export default AppLayout;
