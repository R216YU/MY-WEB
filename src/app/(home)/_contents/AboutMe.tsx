import { motion } from "framer";
import { ReactElement } from "react";
import { LuGithub, LuInstagram } from "react-icons/lu";
import { IconType } from "react-icons";
import { SiQiita } from "react-icons/si";
import { Button } from "@heroui/react";
import Link from "next/link";

interface Link {
  name: string;
  url: string;
  icon: IconType;
  style: string;
  disabled?: boolean;
}

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
];

const AboutMe = () => {
  return (
    <div id="AboutMe" className="h-lvh w-full p-8">
      <div className="h-full flex flex-col justify-center items-center gap-16">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <motion.div
            initial={{ scale: 0.6, rotate: -15, opacity: 0 }}
            animate={{ scale: 1.1, rotate: 5, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 900,
              damping: 12,
              bounce: 0.8,
              duration: 0.45,
            }}
            whileHover={{ scale: 1.15, rotate: 0 }}
            whileTap={{ scale: 0.95, rotate: -5 }}
          >
            <img
              src="/profile/yukidaruma.jpg"
              alt="yukidaruma"
              className="w-48 h-48 mb-8 lg:mb-0 lg:mr-8 border-4 border-amber-100 rounded-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 0.5,
              duration: 0.5,
            }}
          >
            <h2 className="text-2xl">Ryu Suzuki</h2>
            <p className="text-sm mb-4">Web Developer/Gamer</p>
            <p className="text-base mb-4">
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
          </motion.div>
        </div>

        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 0.7,
              duration: 0.5,
            }}
          >
            <h3 className="text-md">スキルスタック</h3>
            <ul className="text-sm list-disc list-inside">
              <li>言語: TypeScript(JS), Python, Java</li>
              <li>
                フレームワーク: React, Next.js, Express, Hono, Fastify, FastAPI,
                Flask, Django
              </li>
              <li>クラウド: AWS</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 0.9,
              duration: 0.5,
            }}
          >
            <h3 className="text-md">所有資格</h3>
            <ul className="text-sm list-disc list-inside">
              <li>AWS Certified Cloud Practitioner (CLF)</li>
              <li>AWS Certified Solutions Architect - Associate (SAA)</li>
              <li>AWS Certified Developer - Associate (DVA)</li>
              <li>AWS Certified CloudOps Engineer - Associate (SOA)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 1.1,
              duration: 0.5,
            }}
          >
            <h3 className="text-md">2026年中のTODO</h3>
            <ul className="text-sm list-disc list-inside">
              <li>AWS Certified Solutions Architect - Professional (SAP)</li>
              <li>AWS Certified DevOps Engineer - Professional (DOP)</li>
              <li>応用情報技術者試験</li>
              <li>Java Silver</li>
              <li>Java Gold</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
