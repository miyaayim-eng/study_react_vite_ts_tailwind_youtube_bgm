import { FC, memo } from "react";
import { YoutubeKeywordType } from "../../types/youtubeType";

type Props = {
  searchKeyword: YoutubeKeywordType;
  setSearchKeyword: (keyword: string) => void;
  children: string;
};

export const Tab: FC<Props> = memo((props) => {
  const { searchKeyword, setSearchKeyword, children } = props;

  const onClickChangeKeyword = () => {
    setSearchKeyword(children);
  };

  let currentClass = "bg-neutral-700";
  if (searchKeyword === children) {
    currentClass = "bg-neutral-300 text-neutral-800";
  } else {
    currentClass = "bg-neutral-700";
  }

  return (
    <li>
      <button
        onClick={onClickChangeKeyword}
        className={`${currentClass} block py-1 px-4 rounded-lg transition-all hover:bg-neutral-300 hover:text-neutral-800`}
      >
        {children}
      </button>
    </li>
  );
});
