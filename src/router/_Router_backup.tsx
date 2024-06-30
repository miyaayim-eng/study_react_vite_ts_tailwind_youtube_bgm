import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Basic } from "../components/pages/Baseic";

export const Router: FC = memo(() => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <BasicWrapper pageName="YouTube作業用BGM一覧" keywords={[]} />
          }
        />
        <Route
          path="/lofi"
          element={
            <BasicWrapper
              pageName="Lofi Chill系"
              keywords={["Lo-fi", "Chill"]}
            />
          }
        />
        <Route
          path="/ambient"
          element={
            <BasicWrapper pageName="環境音系" keywords={["雨", "小川"]} />
          }
        />
      </Routes>
    </>
  );
});

type Props = {
  pageName: string;
  keywords: Array<string>;
};

const BasicWrapper: FC<Props> = ({ pageName, keywords }) => {
  return <Basic pageName={pageName} keywords={keywords} />;
};
