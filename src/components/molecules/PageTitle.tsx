import { FC, memo, useContext } from "react";
import { pageInfo } from "../../config/siteInfo";
import { PageInfoContext } from "../../providers/PageInfoProvider";

export const PageTitle: FC = memo(() => {
  const { page } = useContext(PageInfoContext);
  // pageがnullでないことを確認する
  if (!page) return null;
  const { pageNameJapanese, pageNameEnglish } = page;
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
        <h1 className="font-roboto font-bold text-4xl md:text-5xl">
          {pageNameJapanese}
        </h1>
      ) : (
        <p className="font-roboto font-bold text-4xl md:text-5xl">
          {pageNameEnglish}
        </p>
      )}
      {pageNameEnglish !== pageInfo[0].pageNameEnglish && (
        <h1 className="font-bold text-lg md:text-xl mt-3">
          {pageNameJapanese}
        </h1>
      )}
      <div className="flex mt-4 justify-center">
        <div className="w-12 md:w-16 h-[2px] md:h-[4px] rounded-full bg-red-700"></div>
      </div>
    </div>
  );
});
