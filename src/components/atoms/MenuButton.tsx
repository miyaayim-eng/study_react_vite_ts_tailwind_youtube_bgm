import { FC, memo, useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const MenuButton: FC<Props> = memo((props) => {
  const { isOpen, setIsOpen } = props;
  const [openClass, setOpenClass] = useState<string>("");
  const activeStyle = "bg-neutral-700";

  useEffect(() => {
    if (isOpen) {
      setOpenClass("bg-neutral-700");
    } else {
      setOpenClass("");
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <p className="md:hidden grid place-content-center">
      <button
        onClick={handleClick}
        className={`${openClass} w-10 h-10 rounded-[50%] grid gap-y-[6px] place-content-center transition-all hover:${activeStyle}`}
      >
        <span className="h-[1px] w-[20px] bg-white select-none"></span>
        <span className="h-[1px] w-[20px] bg-white select-none"></span>
        <span className="h-[1px] w-[20px] bg-white select-none"></span>
      </button>
    </p>
  );
});
