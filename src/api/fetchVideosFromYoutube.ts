import axios from "axios";
import { videoConfig } from "../config/siteInfo";

if (!import.meta.env.VITE_YOUTUBE_API_KEY) {
  throw new Error("VITE_YOUTUBE_API_KEY が設定されていません。");
}

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const apiClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export const fetchVideosFromYoutube = async (searchKeyword: string) => {
  // console.log("---fetchYoutubeVideos---");
  try {
    const response = await apiClient.get(`/search`, {
      params: {
        part: "snippet", // 動画の基本情報（タイトル、説明、サムネイルなど）
        eventType: "completed", // ライブ配信を除外するためにイベントタイプをcompletedに設定
        maxResults: videoConfig.maxResults, // 取得する動画の最大数。
        q: searchKeyword, // 検索クエリ。ここで検索キーワードを指定します。
        regionCode: "JP", // 日本の人気動画を取得するためのリージョンコード。
        type: "video", // 取得するリソースの種類。ここでは動画を指定しています。
        key: YOUTUBE_API_KEY, // APIキー。Google Cloud Consoleで取得したYouTube APIキーを指定
      },
    });
    // console.log(response);
    // console.log("response.data.items => ", response.data.items);
    return response.data.items;
  } catch (error) {
    console.error("YouTubeデータの取得に失敗しました", error);
    throw error;
  }
};
