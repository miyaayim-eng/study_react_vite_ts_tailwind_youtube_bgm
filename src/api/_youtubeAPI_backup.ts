import axios from "axios";

if (!import.meta.env.VITE_YOUTUBE_API_KEY) {
  throw new Error("VITE_YOUTUBE_API_KEY が設定されていません。");
}

// const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const apiClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export const fetchYouTube = async (searchKeyword: string) => {
  // console.log("---fetchYouTube---");
  try {
    // const response = await apiClient.get(`/videos`, {
    //   params: {
    //     part: "snippet", // 動画の基本情報（タイトル、説明、サムネイルなど）
    //     maxResults: 1, // 取得する動画の最大数。
    //     key: YOUTUBE_API_KEY, // APIキー。Google Cloud Consoleで取得したYouTube APIキーを指定
    //     regionCode: "JP", // 日本の人気動画を取得するためのリージョンコード。
    //     type: "video", // 取得するリソースの種類。ここでは動画を指定しています。
    //     chart: "mostPopular", // 人気の動画を取得するための設定。これにより、最も人気のある動画が返されます。
    //   },
    // });
    const response = await apiClient.get(`/search`, {
      params: {
        part: "snippet", // 動画の基本情報（タイトル、説明、サムネイルなど）
        maxResults: 1, // 取得する動画の最大数。
        key: YOUTUBE_API_KEY, // APIキー。Google Cloud Consoleで取得したYouTube APIキーを指定
        regionCode: "JP", // 日本の人気動画を取得するためのリージョンコード。
        type: "video", // 取得するリソースの種類。ここでは動画を指定しています。
        q: searchKeyword, // 検索クエリ。ここで検索キーワードを指定します。
      },
    });
    // console.log(response);
    return response.data.items;
  } catch (error) {
    console.error("YouTubeデータの取得に失敗しました", error);
    throw error;
  }
};
