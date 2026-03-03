import Works from "../_types/work-type";

export const WORKS: Works[] = [
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
