"use client";

import EntryPoint from "./_contents/EntryPoint";
import AboutMe from "./_contents/AboutMe";
import Works from "./_contents/Works";
import { useNavigationStore } from "@/shared/store/navigationStore";
import { motion, AnimatePresence } from "framer";

/**
 * Home画面のコンポーネント
 * @description 自己紹介, エンジニアリングスキル, 作品一覧を表示する
 * @returns
 */
const Home = () => {
  const { current } = useNavigationStore();

  return (
    <main className="relative min-h-lvh w-full overflow-hidden">
      {current === "EntryPoint" && <EntryPoint />}
      {current === "AboutMe" && <AboutMe />}
      {current === "Works" && <Works />}
    </main>
  );
};

export default Home;
