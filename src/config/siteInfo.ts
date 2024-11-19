import { YoutubeKeywordsType } from "../types/youtubeType";

export interface PageInfoType {
  pageNameJapanese: string;
  pageNameEnglish: string;
  pagePath: string;
  keywords: YoutubeKeywordsType;
}

export const pageInfo: Array<PageInfoType> = [
  // {
  //   pageNameJapanese: "環境音系",
  //   pageNameEnglish: "Ambient",
  //   pagePath: "/ambient",
  //   keywords: ["雨の音"],
  // },
  {
    pageNameJapanese: "YouTube BGM",
    pageNameEnglish: "All",
    pagePath: "/",
    keywords: [],
  },
  {
    pageNameJapanese: "Lo-fi、Chill系",
    pageNameEnglish: "Lo-fi & Chill",
    pagePath: "/lofi",
    keywords: ["Lo-fi", "Chill", "Lo-fi Hip hop"],
  },
  {
    pageNameJapanese: "環境音系",
    pageNameEnglish: "Ambient",
    pagePath: "/ambient",
    keywords: ["雨の音", "川の音", "波の音", "焚き火", "α波"],
  },
  {
    pageNameJapanese: "その他",
    pageNameEnglish: "Other",
    pagePath: "/other",
    keywords: ["ジャズBGM", "ボサノバBGM", "スタバBGM"],
  },
];

export const videoConfig = {
  maxResults: 15, // 取得するビデオ数
  categoryDisplayLimit: 10, // 各カテゴリーで表示するビデオ数
  topPageDisplayLimit: 10, // トップページに表示するビデオ数
  // 除外キーワード
  excludeKeywords: [
    "配信",
    "LIVE",
    "ラジオ",
    "雑談",
    "囁き",
    "添い寝",
    "寝息",
    "耳かき",
    "ASMR",
  ] as const,
};
