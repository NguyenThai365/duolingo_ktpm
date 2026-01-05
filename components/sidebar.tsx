import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
// Dummy SidebarItem for now
const SidebarItem = ({ label, href, iconSrc }: { label: string; href: string; iconSrc: string; }) => {
  return (
    <Link href={href}>
      <div className="flex items-center gap-x-3 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all cursor-pointer">
        <Image src={iconSrc} alt={label} width={32} height={32} />
        <p className="text-sm font-semibold text-gray-700">{label}</p>
      </div>
    </Link>
  );
};

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full w-[256px] fixed left-0 top-0 border-r-2 flex-col hidden lg:flex",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
      </div>
    </div>
  );
};
