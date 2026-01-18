import { motion } from "framer";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div id="AboutMe" className="h-lvh w-full">
        <div className="h-full flex flex-col justify-center items-center gap-16">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 18,
                bounce: 0.6,
                delay: 0.3,
              }}
            >
              <img
                src="/yukidaruma.jpg"
                alt="yukidaruma"
                className="w-48 h-48 mb-8 lg:mb-0 lg:mr-8 border-2 border-amber-100 rounded-md"
              />
            </motion.div>
            <div>
              <h2 className="text-2xl">Ryu Suzuki</h2>
              <p className="text-sm mb-4">Web Developer/Gamer</p>
              <p className="text-base">
                Webエンジニアとして活動しているR216YUです。 <br />
                2000年2月16日生まれ 静岡生まれ、富山育ち、東京住み <br />
                趣味はゲーム、音楽(特に凛として時雨)、アニメ、映画、など...{" "}
                <br />
                最近はAWSやIPA資格試験の勉強をしつつ、気分転換でアプリを作成しています。
                <br />
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-md">スキルスタック</h3>
              <ul className="text-sm list-disc list-inside">
                <li>言語: TypeScript(JS), Python, Java</li>
                <li>
                  フレームワーク: React, Next.js, Express, Hono, Fastify,
                  FastAPI, Flask, Django
                </li>
                <li>クラウド: AWS</li>
              </ul>
            </div>

            <div>
              <h3 className="text-md">所有資格</h3>
              <ul className="text-sm list-disc list-inside">
                <li>AWS Certified Cloud Practitioner (CLF)</li>
                <li>AWS Certified Solutions Architect - Associate (SAA)</li>
                <li>AWS Certified Developer - Associate (DVA)</li>
                <li>AWS Certified CloudOps Engineer - Associate (SOA)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
