import { FC, memo } from "react";
import { Card } from "../molecules/Card";
import { YoutubeVideoType } from "../../types/youtubeType";

type Props = {
  showVideos: Array<YoutubeVideoType>;
};

export const Cards: FC<Props> = memo((props) => {
  const { showVideos } = props;

  return (
    <ul className="grid mt-16 gap-x-4 gap-y-10 grid-cols-[repeat(auto-fill,minmax(theme(spacing.72),1fr))]">
      {showVideos.map((video: YoutubeVideoType) => {
        return <Card key={video.id.videoId} video={video} />;
      })}
    </ul>
  );
});
