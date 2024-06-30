import { YoutubeAllVideosType } from "../types/youtubeType";

export const exampleObject: YoutubeAllVideosType = [
  {
    name: "Lo-fi Chill系",
    keyword: "Lo-fi",
    videos: [
      // 例としてビデオオブジェクトを追加
      { id: { videoId: "video1" }, snippet: { title: "Video 1" } },
      { id: { videoId: "video2" }, snippet: { title: "Video 2" } },
    ],
  },
  {
    name: "Lo-fi Chill系",
    keyword: "Chill",
    videos: [
      { id: { videoId: "video3" }, snippet: { title: "Video 3" } },
      { id: { videoId: "video4" }, snippet: { title: "Video 4" } },
    ],
  },
  {
    name: "環境音系",
    keyword: "雨",
    videos: [
      { id: { videoId: "video5" }, snippet: { title: "Video 5" } },
      { id: { videoId: "video6" }, snippet: { title: "Video 6" } },
    ],
  },
  {
    name: "環境音系",
    keyword: "小川",
    videos: [
      { id: { videoId: "video7" }, snippet: { title: "Video 7" } },
      { id: { videoId: "video8" }, snippet: { title: "Video 8" } },
    ],
  },
];
