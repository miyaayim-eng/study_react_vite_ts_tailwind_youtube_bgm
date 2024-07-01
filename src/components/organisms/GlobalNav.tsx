import { FC, memo, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { PageInfoContext } from "../../providers/PageInfoProvider";
import { pageInfo } from "../../config/siteInfo";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const GlobalNav: FC<Props> = memo((props) => {
  const { isOpen, setIsOpen } = props;
  const { page } = useContext(PageInfoContext);
  if (!page) return null;
  const { pagePath } = page;

  const openStyle = "translate-x-0";
  const closeStyle = "max-md:translate-x-full";
  const [toggleClass, setToggleClass] = useState<string>(closeStyle);

  // 開けるときは「閉スタイル」を削除、閉めるときは「閉スタイル」を付与
  useEffect(() => {
    if (isOpen) {
      setToggleClass(openStyle);
    } else {
      setToggleClass(closeStyle);
    }
  }, [isOpen]);

  // 初回起動時と画面横幅が変更されたときのイベントリスナー設定
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setToggleClass(openStyle);
      } else {
        setToggleClass(closeStyle);
      }
    };

    // 初回チェック
    if (mediaQuery.matches) {
      setToggleClass(openStyle);
    } else {
      setToggleClass(closeStyle);
    }

    // イベントリスナーの登録
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // クリーンアップ関数
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // リンククリック時に閉じる
  const handleClick = () => {
    if (!isOpen) return;
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${toggleClass} max-md:transition-transform max-md:duration-500 max-md:ease-in-out max-md:absolute max-md:top-full max-md:left-0 max-md:right-0 max-md:border-t-2 max-md:border-neutral-700 max-md:bg-neutral-800 max-md:h-[calc(100dvh-theme(spacing.16))] max-md:overflow-y-scroll overscroll-contain`}
    >
      <ul className="max-md:flex-col max-md:py-8 max-md:px-8 flex gap-x-3 md:h-full max-md:min-h-[calc(100%+1px)]">
        {pageInfo.map((page) => {
          let currentClass = "";
          if (pagePath === page.pagePath) {
            currentClass = "before:w-[40px]";
          } else {
            currentClass = "before:w-0";
          }

          return (
            <li
              key={page.pageNameEnglish}
              className="max-md:border-t-2 max-md:border-neutral-700 max-md:last:border-b-2"
            >
              <Link
                onClick={handleClick}
                to={page.pagePath}
                className={`${currentClass} grid place-content-center h-full font-roboto text-color-headline text-xl font-semibold p-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-red-700 before:rounded-full before:h-[2px] hover:before:w-[40px] before:transition-all`}
              >
                {page.pageNameEnglish}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});
