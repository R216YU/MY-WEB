"use client";

import { motion } from "framer";
import AppCard from "./_components/WorkCard";

const WORKS: Works[] = [
  {
    imgPath: "/works/my-web.png",
    title: "My Web",
    description: (
      <>
        ポートフォリオサイト <br />
        Next.jsのSSGを使って静的ビルドを行い、AWSのCloudFront,
        S3でホスティングしています。
        <br />
      </>
    ),
    tags: ["Next.js", "Tailwind CSS", "Hero UI", "Motion", "AWS"],
    siteLink: "https://r216yu.xyz",
    githubLink: "https://github.com/R216YU/MY-WEB",
  },
];

const WorksPage = () => {
  return (
    <div id="Works" className="min-h-lvh w-full">
      <div className="flex flex-col justify-center items-center gap-8 p-8">
        {WORKS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.3 }}
            style={{ width: "100%" }}
          >
            <AppCard {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorksPage;
