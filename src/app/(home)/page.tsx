import AboutMe from "./_contents/AboutMe";
import EntryPoint from "./_contents/EntryPoint";
import Works from "./_contents/Works";

/**
 * Home画面のコンポーネント
 * @description 自己紹介, エンジニアリングスキル, 作品一覧を表示する
 * @returns
 */
const Home = () => {
  return (
    <main>
      <EntryPoint />
      {/* <AboutMe />
      <Works /> */}
    </main>
  );
};

export default Home;
