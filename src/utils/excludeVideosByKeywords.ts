import { YoutubeVideoType } from "../types/youtubeType";
import { videoConfig } from "../config/siteInfo";

// 動画を除外キーワードでフィルタリングする関数
export const excludeVideosByKeywords = (
  videosData: Array<YoutubeVideoType>
) => {
  const excludeKeywords = videoConfig.excludeKeywords;
  const filteredVideos = videosData.filter((video: YoutubeVideoType) => {
    const title = video.snippet.title.toLowerCase();
    // const description = video.snippet.description.toLowerCase();

    // タイトルまたは説明に除外キーワードが含まれているかチェック
    return !excludeKeywords.some(
      (keyword) => title.includes(keyword.toLowerCase())
      //  || description.includes(keyword.toLowerCase())
    );
  });

  return filteredVideos;
};
