export type YoutubeVideoType = {
  kind?: string;
  etag?: string;
  id: {
    kind?: string;
    videoId: string;
  };
  snippet: {
    publishedAt?: string;
    channelId?: string;
    title: string;
    description?: string;
    thumbnails?: any;
    liveBroadcastContent: string;
    channelTitle?: string;
    publishTime?: string;
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
