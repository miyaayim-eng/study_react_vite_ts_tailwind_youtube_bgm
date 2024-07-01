import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Basic } from "../components/pages/Basic";
import { Page404 } from "../components/pages/Page404";
import { pageInfo, PageInfoType } from "../config/siteInfo";
import { PageInfoProvider } from "../providers/PageInfoProvider";

export const Router: FC = memo(() => {
  return (
    <div className="min-h-dvh font-roboto bg-neutral-900 text-white">
      <Routes>
        {pageInfo.map((page: PageInfoType) => (
          <Route
            key={page.pagePath}
            path={page.pagePath}
            element={
              <PageInfoProvider page={page}>
                <Basic />
              </PageInfoProvider>
            }
          />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
});
