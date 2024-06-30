import { FC, memo, useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const MenuButton: FC<Props> = memo((props) => {
  const { isOpen, setIsOpen } = props;
  const activeStyle = "bg-neutral-700";
  const [activeClass, setActiveClass] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      setActiveClass(activeStyle);
    } else {
      setActiveClass("");
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // 画面横幅が変更されたときのイベントリスナー設定
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaQueryChange = () => {
      setIsOpen(false);
    };

    // イベントリスナーの登録
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // クリーンアップ関数
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <p className="md:hidden grid place-content-center">
      <button
        onClick={handleClick}
        className={`${activeClass} w-10 h-10 rounded-[50%] grid gap-y-[6px] place-content-center transition-all hover:${activeStyle}`}
      >
        <span className="h-[1px] w-[20px] bg-white select-none"></span>
        <span className="h-[1px] w-[20px] bg-white select-none"></span>
        <span className="h-[1px] w-[20px] bg-white select-none"></span>
      </button>
    </p>
  );
});
