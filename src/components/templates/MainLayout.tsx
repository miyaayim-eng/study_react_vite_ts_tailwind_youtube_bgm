import { memo, FC } from "react";

import { Main } from "../organisms/layout/Main";

export const MainLayout: FC = memo(() => {
  return (
    <main className="pt-16">
      <Main />
    </main>
  );
});
