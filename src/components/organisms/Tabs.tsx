import { FC, memo } from "react";
import { Tab } from "../molecules/Tab";
import {
  YoutubeKeywordType,
  YoutubeKeywordsType,
} from "../../types/youtubeType";

type Props = {
  keywords: YoutubeKeywordsType;
  searchKeyword: YoutubeKeywordType;
  setSearchKeyword: (keyword: YoutubeKeywordType) => void;
};

export const Tabs: FC<Props> = memo((props) => {
  const { keywords, searchKeyword, setSearchKeyword } = props;

  return (
    <ul className="flex gap-8 w-fit mx-auto">
      {keywords.map((keyword) => (
        <Tab
          key={keyword}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        >
          {keyword}
        </Tab>
      ))}
    </ul>
  );
});
