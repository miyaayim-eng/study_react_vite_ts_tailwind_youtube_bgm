import { memo, FC } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  pagePath: string;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { pagePath } = props;

  return (
    // <header className="drop-shadow-md bg-neutral-800">
    <header className="border-b-2 border-neutral-700 bg-neutral-900 min-h-16 fixed top-0 left-0 right-0">
      <Header pagePath={pagePath} />
    </header>
  );
});
