import { FC, memo } from "react";

import { MainLayout } from "../templates/MainLayout";
import { PageInfoType } from "../../config/siteInfo";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Basic: FC<PageInfoType> = memo((props) => {
  const { pageNameJapanese, pageNameEnglish, pagePath, keywords } = props;

  return (
    <>
      <HeaderLayout pagePath={pagePath} />
      <MainLayout
        pageNameJapanese={pageNameJapanese}
        pageNameEnglish={pageNameEnglish}
        pagePath={pagePath}
        keywords={keywords}
      />
    </>
  );
});
