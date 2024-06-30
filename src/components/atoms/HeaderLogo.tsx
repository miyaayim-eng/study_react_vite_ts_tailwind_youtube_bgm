import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { pageInfo } from "../../config/siteInfo";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const HeaderLogo: FC<Props> = memo((props) => {
  const { isOpen, setIsOpen } = props;

  // リンククリック時に閉じる
  const handleClick = () => {
    if (!isOpen) return;
    setIsOpen(!isOpen);
  };

  return (
    <p>
      <Link
        onClick={handleClick}
        to={pageInfo[0].pagePath}
        className="grid place-content-center h-full font-roboto text-2xl font-bold p-4"
      >
        {pageInfo[0].pageNameJapanese}
      </Link>
    </p>
  );
});
