import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { Header } from "./header";

const LearnPage = () => {
  // Hardcoded data for static UI
  const userProgress = {
    activeCourse: {
      title: "Spanish",
      imageSrc: "/es.svg", // Assuming es.svg is in public
    },
    hearts: 5,
    points: 100,
    hasActiveSubscription: false,
  };

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={userProgress.hasActiveSubscription}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        <div className="space-y-4">
          {/* This is where the units would go. Leaving it empty for now. */}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;