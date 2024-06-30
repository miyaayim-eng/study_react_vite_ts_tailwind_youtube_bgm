import { Basic } from "../components/pages/Baseic";


type Props = {
  pageName: string;
  keywords: Array<string>;
};

const BasicWrapper: FC<Props> = ({ pageName, keywords }) => {
  return <Basic pageName={pageName} keywords={keywords} />;
};


export const HomeRoutes = [
  {
    path: "",
    element={
      <BasicWrapper pageName="YouTube作業用BGM一覧" keywords={[]} />
    },
  },
  {
    path="/lofi"
    element={
      <BasicWrapper
        pageName="Lofi Chill系"
        keywords={["Lo-fi", "Chill"]}
      />
    },
  },
];
