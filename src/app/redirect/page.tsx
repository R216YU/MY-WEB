"use client";

import { useRouter } from "next/navigation";

/**
 * CloudFront, S3でホスティングする際に "/" 以外のURLに直接飛ぶとURLと画面の内容が一致しなくなる
 * これを防ぐために、直接TOP以外のページにアクセスした場合を想定したリダイレクト画面を作成しておく
 * CloudFrontでは403, 404エラーを吐いた場合は"/redirect"に遷移するように設定を行う
 * @returns
 */
const Redirect = () => {
  const router = useRouter();

  return router.push("/");
};

export default Redirect;
