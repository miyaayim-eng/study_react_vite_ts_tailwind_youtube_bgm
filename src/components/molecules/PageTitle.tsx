import { FC, memo, useEffect, useState } from "react";
import { pageInfo } from "../../config/siteInfo";

type Props = {
  pageNameJapanese: string;
  pageNameEnglish: string;
};

export const PageTitle: FC<Props> = memo((props) => {
  const { pageNameJapanese, pageNameEnglish } = props;
  // const [topTitleClass, setTopTitleClass] = useState<string>("");

  // useEffect(() => {
  //   if (pageNameJapanese === pageInfo[0].pageNameJapanese) {
  //     setTopTitleClass("font-roboto text-5xl");
  //   } else {
  //     setTopTitleClass("text-4xl");
  //   }
  // }, [pageNameJapanese]);

  return (
    <div className="text-center">
      {pageNameEnglish === pageInfo[0].pageNameEnglish ? (
        <h1 className="font-roboto font-bold text-5xl">{pageNameJapanese}</h1>
      ) : (
        <p className="font-roboto font-bold text-5xl">{pageNameEnglish}</p>
      )}
      {pageNameEnglish !== pageInfo[0].pageNameEnglish && (
        <h1 className="font-bold text-xl mt-3">{pageNameJapanese}</h1>
      )}
      <div className="flex mt-4 justify-center">
        <div className="w-16 h-[4px] rounded-full bg-red-700"></div>
      </div>
    </div>
  );
});
