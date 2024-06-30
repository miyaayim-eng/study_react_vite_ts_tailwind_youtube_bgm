import { memo, FC } from "react";

import { Main } from "../organisms/layout/Main";
import { PageInfoType } from "../../config/siteInfo";

export const MainLayout: FC<PageInfoType> = memo((props) => {
  const { pageNameJapanese, pageNameEnglish, pagePath, keywords } = props;

  return (
    <main className="pt-16">
      <Main
        pageNameJapanese={pageNameJapanese}
        pageNameEnglish={pageNameEnglish}
        pagePath={pagePath}
        keywords={keywords}
      />
    </main>
  );
});
