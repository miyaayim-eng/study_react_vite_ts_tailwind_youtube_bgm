import { FC, memo, useState } from "react";

import { HeaderLogo } from "../../atoms/HeaderLogo";
import { GlobalNav } from "../GlobalNav";
import { MenuButton } from "../../atoms/MenuButton";

type Props = {
  pagePath: string;
};

export const Header: FC<Props> = memo((props) => {
  const { pagePath } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between px-2 gap-8 md:px-8">
      <HeaderLogo isOpen={isOpen} setIsOpen={setIsOpen} />
      <GlobalNav pagePath={pagePath} isOpen={isOpen} setIsOpen={setIsOpen} />
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
});
