import { YoutubeVideoType } from "../types/youtubeType";

export const shuffleArray = (array: Array<YoutubeVideoType>): Array<any> => {
  // 配列の要素の並びをシャッフルする関数
  const randomizeArray = (array: Array<YoutubeVideoType>) => {
    // Fisher-Yatesアルゴリズムを使って配列をランダムに並び替える
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledArray = randomizeArray(array);

  return shuffledArray;
};
