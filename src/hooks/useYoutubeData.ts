import { useState, useEffect } from "react";
import {
  YoutubeVideoType,
  YoutubeKeywordType,
  YoutubeAllVideosType,
  YoutubeOneVideoType,
} from "../types/youtubeType";
import { localVideosDataFiltered } from "../api/localVideosDataFiltered";
// import { localVideosDataOriginal } from "../api/localVideosDataOriginal";
import { fetchAllVideos } from "../utils/fetchAllVideos";
import { shuffleArray } from "../utils/shuffleArray";
import { videoConfig } from "../config/siteInfo";

export const useYoutubeData = (searchKeyword: YoutubeKeywordType) => {
  const [allVideos, setAllVideos] = useState<YoutubeAllVideosType>([]);
  const [topPageVideos, setTopPageVideos] = useState<YoutubeVideoType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetchError, setIsFetchError] = useState<boolean>(false);
  const [showVideos, setShowVideos] = useState<YoutubeVideoType[]>([]);

  // 重複した動画を統合する関数
  // 参考：https://qiita.com/allJokin/items/28cd023335641e8796c5
  const mergeDuplicateVideos = (videos: Array<YoutubeVideoType>) => {
    const uniqueVideosMap = Array.from(
      new Map(videos.map((video) => [video.id.videoId, video])).values()
    );
    return Array.from(uniqueVideosMap.values());
  };

  // データを更新する関数
  const updateVideos = (videosData: YoutubeAllVideosType) => {
    // 全ての動画データ

    setAllVideos(videosData);

    // トップページ用の動画データ
    const flatAllVideos = videosData
      .map((item: YoutubeOneVideoType) => item.videos)
      .flat(); // 全ての動画をフラットな配列にしてセットする
    const mergedVideos = mergeDuplicateVideos(flatAllVideos);
    const shuffledResult = shuffleArray(mergedVideos);
    const limitedResult = shuffledResult.slice(
      0,
      videoConfig.topPageDisplayLimit
    );
    setTopPageVideos(limitedResult);
  };

  // YoTube APIからデータ取得
  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      setIsFetchError(false);
      try {
        const videosData = await fetchAllVideos();
        updateVideos(videosData);
      } catch (error) {
        console.error("APIファイル実行時にエラーが検出されました", error);
        setIsFetchError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVideos();
  }, []); // 初回のみ実行

  // ローカルからデータ取得
  const getLocalData = () => {
    // フィルターなし
    // const videosData = localVideosDataOriginal;
    // フィルターあり
    const videosData = localVideosDataFiltered;
    updateVideos(videosData);
    setIsFetchError(false);
  };

  // showVideosを更新
  useEffect(() => {
    // searchKeyword が空の場合は全ての動画を表示する場合として考える
    if (!searchKeyword) {
      setShowVideos(topPageVideos);
      return;
    }

    // searchKeyword に一致する keyword を持つオブジェクトを検索する
    const matchedVideo = allVideos.find(
      (item) => item.keyword === searchKeyword
    );

    // 一致する動画が見つかった場合はその動画のリストをセットする
    if (matchedVideo) {
      setShowVideos(matchedVideo.videos);
    } else {
      setShowVideos([]); // 一致する動画が見つからなかった場合は空のリストをセットする
    }
  }, [allVideos, searchKeyword, topPageVideos]);

  // コンソール確認用
  // useEffect(() => {
  //   console.log("allVideos => ", allVideos);
  // }, [allVideos]);

  // コンソール確認用
  // useEffect(() => {
  //   console.log("topPageVideos => ", topPageVideos);
  // }, [topPageVideos]);

  return { showVideos, isLoading, isFetchError, getLocalData };
};
