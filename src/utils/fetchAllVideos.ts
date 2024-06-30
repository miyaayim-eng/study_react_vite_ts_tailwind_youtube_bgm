import { fetchVideosFromYoutube } from "../api/fetchVideosFromYoutube";
import { pageInfo, videoConfig } from "../config/siteInfo";
import { YoutubeAllVideosType, YoutubeVideoType } from "../types/youtubeType";
import { excludeVideosByKeywords } from "./excludeVideosByKeywords";

// テスト用ローカルデータ
// import { localVideosDataOriginalOne } from "../api/localVideosDataOriginalOne";

export const fetchAllVideos = async () => {
  // console.log("---fetchAllVideos---");
  try {
    // const videoInfos: VideoInfo[] = [];
    const allVideos: YoutubeAllVideosType = [];

    // 各ページ情報を処理する
    for (const page of pageInfo) {
      if (page.keywords) {
        // 各キーワードごとに動画データを取得し、VideoInfo 形式に変換する
        for (const keyword of page.keywords) {
          // YouTube APIから動画データを取得
          const fetchedVideos = await fetchVideosFromYoutube(keyword);

          // テスト用
          // const fetchedVideos = localVideosDataOriginalOne;

          // console.log("fetchedVideos => ", fetchedVideos);

          // ライブ配信を除外
          // データ取得時に「eventType: "completed"」としているので不要
          // const nonLiveVideos = fetchedVideos.filter(
          //   (item: YoutubeVideoType) =>
          //     item.snippet.liveBroadcastContent === "none"
          // );

          const keywordFilteredVideos = excludeVideosByKeywords(fetchedVideos);

          // console.log("nonLiveVideos => ", nonLiveVideos);

          // 取得したデータの先頭からx件のみのデータに絞る
          const limitedVideos = keywordFilteredVideos.slice(
            0,
            videoConfig.categoryDisplayLimit
          );

          // name,keywordの情報を追加して配列追加
          allVideos.push({
            name: page.pageNameEnglish,
            keyword: keyword,
            videos: limitedVideos,
          });
        }
      }
    }

    // console.log("allVideos => ", allVideos);
    return allVideos;
  } catch (error) {
    console.error("複数のYouTubeデータの取得に失敗しました", error);
    throw error;
  }
};
