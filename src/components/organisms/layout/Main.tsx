import { FC, memo } from "react";

import { PageTitle } from "../../molecules/PageTitle";
import { Videos } from "../Videos";

export const Main: FC = memo(() => {
  return (
    <div className="py-12 md:py-20 px-8 md:px-16 xl:px-32">
      <div className="max-w-screen-2xl mx-auto">
        <PageTitle />
        <Videos />
      </div>
    </div>
  );
});
