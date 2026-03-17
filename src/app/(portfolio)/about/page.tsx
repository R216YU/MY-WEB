"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { IconType } from "react-icons";
import { LuGithub, LuInstagram } from "react-icons/lu";
import { SiCredly, SiQiita } from "react-icons/si";
import { SlideUp } from "@/shared/components/animations";

type Link = {
  name: string;
  url: string;
  icon: IconType;
  style: string;
  disabled?: boolean;
};

const LINKS: Link[] = [
  {
    name: "GitHub",
    url: "https://github.com/R216YU",
    icon: LuGithub,
    style: "text-amber-100",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/r216yu/",
    icon: LuInstagram,
    style: "text-pink-500",
  },
  {
    name: "Qiita",
    url: "https://qiita.com/r216yu",
    icon: SiQiita,
    style: "text-green-400",
  },
  {
    name: "Credly",
    url: "https://www.credly.com/users/r216yu/badges#credly",
    icon: SiCredly,
    style: "text-green-600",
  },
];

const AboutPage = () => {
  return (
    <div id="AboutMe" className="min-h-lvh w-full p-8">
      <div className="flex h-full flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <SlideUp>
            <img
              src="/profile/yukidaruma.jpg"
              alt="yukidaruma"
              className="mb-8 h-48 w-48 rounded-md border-4 border-amber-100 lg:mr-8 lg:mb-0"
            />
          </SlideUp>
          <SlideUp delay={0.5}>
            <h2 className="text-2xl">Ryu Suzuki</h2>
            <p className="mb-4 text-sm">Web Developer/Gamer</p>
            <p className="mb-4 text-base">
              Webエンジニアとして活動しているR216YUです。 <br />
              生年月日 2000年2月16日生まれ <br />
              静岡生まれ、富山育ち、東京住み <br />
              趣味はゲーム、音楽(特に凛として時雨)、アニメ、映画、など... <br />
              最近はAWSやIPA資格試験の勉強をしつつ、気分転換でアプリを作成しています。
              <br />
            </p>
            <div className="flex flex-row gap-2">
              {LINKS.map(
                ({ name, url, icon: Icon, style, disabled }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      key={index}
                      variant="tertiary"
                      isIconOnly
                      isDisabled={disabled}
                      aria-label={name}
                    >
                      <Icon className={style} />
                    </Button>
                  </Link>
                ),
              )}
            </div>
          </SlideUp>
        </div>

        <div className="flex flex-col gap-8">
          <SlideUp delay={0.7}>
            <h3 className="text-md">スキルスタック</h3>
            <ul className="list-inside list-disc text-sm">
              <li>言語: TypeScript(JS), Python, Java</li>
              <li>
                フレームワーク: React, Next.js, Express, Hono, Fastify, FastAPI,
                Flask, Django
              </li>
              <li>クラウド: AWS</li>
            </ul>
          </SlideUp>

          <SlideUp delay={0.9}>
            <h3 className="text-md">所有資格</h3>
            <ul className="list-inside list-disc text-sm">
              <li>AWS Certified Cloud Practitioner (CLF)</li>
              <li>AWS Certified Solutions Architect - Associate (SAA)</li>
              <li>AWS Certified Developer - Associate (DVA)</li>
              <li>AWS Certified CloudOps Engineer - Associate (SOA)</li>
              <li>AWS Certified Solutions Architect - Professional (SAP)</li>
            </ul>
          </SlideUp>

          <SlideUp delay={1.1}>
            <h3 className="text-md">2026年中のTODO</h3>
            <ul className="list-inside list-disc text-sm">
              <li>
                <s>AWS Certified Solutions Architect - Professional (SAP)</s>{" "}
                2026/02/08取得
              </li>
              <li>AWS Certified DevOps Engineer - Professional (DOP)</li>
              <li>応用情報技術者試験</li>
              <li>Java Silver</li>
              <li>Java Gold</li>
            </ul>
          </SlideUp>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
