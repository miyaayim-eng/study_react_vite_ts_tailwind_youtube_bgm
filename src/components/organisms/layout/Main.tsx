import { FC, memo } from "react";

import { PageTitle } from "../../molecules/PageTitle";
import { PageInfoType } from "../../../config/siteInfo";
import { Videos } from "../Videos";

export const Main: FC<PageInfoType> = memo((props) => {
  const { pageNameJapanese, pageNameEnglish, keywords } = props;

  return (
    <div className="pt-20 pb-20 px-8 md:px-16 xl:px-32">
      <div className="max-w-screen-2xl mx-auto">
        <PageTitle
          pageNameJapanese={pageNameJapanese}
          pageNameEnglish={pageNameEnglish}
        />
        <Videos keywords={keywords} />
      </div>
    </div>
  );
});
