import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Basic } from "../components/pages/Baseic";
import { Page404 } from "../components/pages/Page404";
import { pageInfo, PageInfoType } from "../config/siteInfo";

export const Router: FC = memo(() => {
  return (
    <div className="min-h-dvh font-roboto bg-neutral-900 text-white">
      <Routes>
        {pageInfo.map((page: PageInfoType) => (
          <Route
            key={page.pagePath}
            path={page.pagePath}
            element={
              <BasicWrapper
                pageNameJapanese={page.pageNameJapanese}
                pageNameEnglish={page.pageNameEnglish}
                pagePath={page.pagePath}
                keywords={page.keywords}
              />
            }
          />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
});

const BasicWrapper: FC<PageInfoType> = ({
  pageNameJapanese,
  pageNameEnglish,
  pagePath,
  keywords,
}) => {
  return (
    <Basic
      pageNameJapanese={pageNameJapanese}
      pageNameEnglish={pageNameEnglish}
      pagePath={pagePath}
      keywords={keywords}
    />
  );
};
