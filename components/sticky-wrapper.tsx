import type { PropsWithChildren } from "react";

export const StickyWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="hidden lg:block w-[368px] self-end sticky bottom-6 top-6">
      <div className="min-h-[calc(100vh-48px)] sticky top-6 flex flex-col gap-y-4">
        {children}
      </div>
    </div>
  );
};
