import { FC, memo, useEffect, useState } from "react";

import { Tabs } from "./Tabs";
import { Cards } from "./Cards";
import { useYoutubeData } from "../../hooks/useYoutubeData";
import { YoutubeKeywordsType } from "../../types/youtubeType";

type Props = {
  keywords: YoutubeKeywordsType;
};

export const Videos: FC<Props> = memo((props) => {
  const { keywords } = props;

  const defaultKeyword = keywords.length > 0 ? keywords[0] : "";
  const [searchKeyword, setSearchKeyword] = useState<string>(defaultKeyword);
  const { showVideos, isLoading, isFetchError, getLocalData } =
    useYoutubeData(searchKeyword);

  // ページ遷移時にdefaultKeywordでsearchKeywordを設定する
  useEffect(() => {
    setSearchKeyword(defaultKeyword);
  }, [defaultKeyword]);

  // コンソール確認用
  // useEffect(() => {
  //   console.log("showVideos => ", showVideos);
  // }, [showVideos]);

  // コンソール確認用
  // useEffect(() => {
  //   console.log("searchKeyword => ", searchKeyword);
  // }, [searchKeyword]);

  return (
    <div className="mt-8 md:mt-16">
      {isLoading ? (
        <p className="text-center font-bold text-xl md:text-3xl">
          動画データ取得中
        </p>
      ) : isFetchError ? (
        <>
          <p className="text-center font-bold text-xl md:text-3xl">
            YouTubeからのデータ取得に失敗しました。
          </p>
          <p className="md:text-xl mt-8 md:mt-14 text-neutral-400 w-fit mx-auto md:text-center">
            YouTube Data APIの使用上限に達した可能性があります。
            <br />
            日を改めて再度お試しいただくか、下のボタンからローカルデータを取得し閲覧ください。
          </p>
          <p className="mt-8 md:mt-16">
            <button
              onClick={getLocalData}
              className="block bg-neutral-700 rounded-full md:text-xl px-8 md:px-12 py-3 md:py-4 w-fit mx-auto hover:bg-neutral-600 transition-all"
            >
              ローカルデータで閲覧する
            </button>
          </p>
        </>
      ) : (
        <>
          {keywords.length > 0 && (
            <Tabs
              keywords={keywords}
              searchKeyword={searchKeyword}
              setSearchKeyword={setSearchKeyword}
            />
          )}
          <Cards showVideos={showVideos} />
        </>
      )}
    </div>
  );
});
