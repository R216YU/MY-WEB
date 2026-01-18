"use client";

import { Button, Card, Chip, Link as HeroLink, LinkIcon } from "@heroui/react";
import { motion, useScroll } from "framer";

import NextLink from "next/link";

motion;

import React from "react";
import { LuGithub } from "react-icons/lu";

interface Works {
  imgPath: string;
  title: string;
  description: React.ReactElement;
  tags?: string[];
  siteLink?: string;
  githubLink?: string;
}

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
  // {
  //   imgPath: "/works/my-web.png",
  //   title: "資格勉強WithAI",
  //   description: (
  //     <>
  //       AIを使った効率的な資格学習ができるアプリケーション。
  //       <br />
  //       WebはNext.js、MobileはReact
  //       Native、バックエンドはHonoアプリケーションをAWS Lambdaで展開しています。
  //       <br />
  //     </>
  //   ),
  //   tags: ["Next.js", "React Native", "Hono", "Gemini API"],
  // },
];

const Works = () => {
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
export default Works;

const AppCard: React.FC<Works> = ({
  imgPath,
  title,
  description,
  tags,
  siteLink,
  githubLink,
}) => {
  return (
    <Card className="flex flex-col items-center sm:flex-row w-full max-w-xl mx-auto min-h-38">
      <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
        <img
          alt={title}
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src={imgPath}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">
            {siteLink ? (
              <HeroLink
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
                <LinkIcon />
              </HeroLink>
            ) : (
              title
            )}
          </Card.Title>
          <Card.Description className="whitespace-pre-line text-pretty">
            {description}
          </Card.Description>
        </Card.Header>

        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          {tags && (
            <div className="flex flex-row flex-wrap gap-1">
              {tags.map((tag) => (
                <Chip color="default" size="sm" className="px-2" key={tag}>
                  {tag}
                </Chip>
              ))}
            </div>
          )}

          {githubLink && (
            <div>
              <NextLink
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" isIconOnly variant="secondary">
                  <LuGithub className="text-amber-100" />
                </Button>
              </NextLink>
            </div>
          )}
        </Card.Footer>
      </div>
    </Card>
  );
};
