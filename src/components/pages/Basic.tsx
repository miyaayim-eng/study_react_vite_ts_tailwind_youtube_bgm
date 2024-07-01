import { FC, memo } from "react";

import { MainLayout } from "../templates/MainLayout";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Basic: FC = memo(() => {
  return (
    <>
      <HeaderLayout />
      <MainLayout />
    </>
  );
});
