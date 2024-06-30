export type YoutubeVideoType = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    liveBroadcastContent: string;
  };
};

export type YoutubeOneVideoType = {
  name: string;
  keyword: string;
  videos: Array<YoutubeVideoType>;
};

export type YoutubeAllVideosType = Array<YoutubeOneVideoType>;

export type YoutubeKeywordType = string;

export type YoutubeKeywordsType = Array<YoutubeKeywordType>;
