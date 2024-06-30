import { FC, memo, useEffect, useState } from "react";

import { Card } from "../molecules/Card";
import { fetchAllVideos } from "../../api/fetchYoutubeVideos";
import { Video } from "../../types/youtubeType";

// import { testObject } from "../../api/testObject";
// import { testObject } from "../../api/testObject2";
import { testObject } from "../../api/testObject5";

type Props = {
  searchKeyword: string;
};

export const Cards: FC<Props> = memo((props) => {
  const { searchKeyword } = props;
  // console.log("videos => ", videos);
  const [allVideos, setAllVideos] = useState<any>([]);
  const [showVideos, setShowVideos] = useState<Array<Video>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetchError, setIsFetchError] = useState<boolean>(false);

  // const AllVideos = fetchAllVideos();
  // console.log("AllVideos => ", AllVideos);

  useEffect(() => {
    // console.log("---useEffect---");
    const getVideos = async () => {
      setIsLoading(true);
      setIsFetchError(false);
      try {
        const videos = await fetchAllVideos();
        // console.log("videos => ", videos);
        setAllVideos(videos); // 取得した動画データをセットする
        console.log("allVideos => ", allVideos);
      } catch (error) {
        console.error("APIファイル実行時にエラーが検出されました", error);
        setIsFetchError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getVideos();
  }, []); // 空の依存リストで初回のみ実行するようにする

  // test
  // useEffect(() => {
  //   const getVideos = async () => {
  //     try {
  //       setAllVideos(testObject); // 取得した動画データをセットする
  //     } catch (error) {
  //       console.error("APIファイル実行時にエラーが検出されました", error);
  //     } finally {
  //     }
  //   };
  //   getVideos();
  // }, []); // 空の依存リストで初回のみ実行するようにする

  // allVideosとsearchKeywordが変更された時に実行するuseEffect
  useEffect(() => {
    // searchKeyword が空の場合は全ての動画を表示する場合として考える
    if (!searchKeyword) {
      setShowVideos(allVideos.map((item: any) => item.videos).flat()); // 全ての動画をフラットな配列にしてセットする
      return;
    }

    // searchKeyword に一致する keyword を持つオブジェクトを検索する
    const matchedVideo = allVideos.find(
      (item: any) => item.keyword === searchKeyword
    );

    // 一致する動画が見つかった場合はその動画のリストをセットする
    if (matchedVideo) {
      setShowVideos(matchedVideo.videos);
      console.log("showVideos => ", showVideos);
    } else {
      setShowVideos([]); // 一致する動画が見つからなかった場合は空のリストをセットする
    }
  }, [allVideos, searchKeyword]);

  // useEffect(() => {
  //   // console.log("---useEffect---");
  //   const fetchData = async (searchKeyword: string) => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetchYouTube(searchKeyword);
  //       setVideos(response);
  //       setIsFetchError(false);
  //       await console.log("videos => ", videos);
  //     } catch (error) {
  //       console.error("APIファイル実行時にエラーが検出されました", error);
  //       setIsFetchError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData(searchKeyword);
  // }, [searchKeyword]);

  return (
    <>
      {isLoading ? (
        <p className="text-center font-bold text-4xl mt-8">動画データ取得中</p>
      ) : isFetchError ? (
        <p className="text-center font-bold text-4xl mt-8">
          データ取得に失敗しました
        </p>
      ) : (
        <ul className="grid grid-cols-1 mt-8 gap-8 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
          {showVideos.map((video: Video) => {
            return <Card key={video.id.videoId} video={video} />;
          })}
        </ul>
      )}
    </>
  );
});
