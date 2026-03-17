"use client";

import AppCard from "./_components/WorkCard";
import { WORKS } from "./_constants/works-data";
import { SlideUp } from "@/shared/components/animations";

const WorksPage = () => {
  return (
    <div id="Works" className="min-h-lvh w-full">
      <div className="flex flex-col items-center justify-center gap-8 p-8">
        {WORKS.map((item, index) => (
          <SlideUp key={item.title} delay={index * 0.3}>
            <AppCard {...item} />
          </SlideUp>
        ))}
      </div>
    </div>
  );
};

export default WorksPage;
