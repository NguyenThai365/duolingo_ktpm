import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="h-full">
          {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
