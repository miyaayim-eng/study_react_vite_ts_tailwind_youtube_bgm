import { FC, createContext, memo } from "react";
import { PageInfoType } from "../config/siteInfo";

type Context = {
  page: PageInfoType | null;
};

export const PageInfoContext = createContext<Context>({ page: null });

type Props = {
  page: PageInfoType;
  children: any;
};

export const PageInfoProvider: FC<Props> = memo((props) => {
  const { page, children } = props;

  return (
    <PageInfoContext.Provider value={{ page }}>
      {children}
    </PageInfoContext.Provider>
  );
});
