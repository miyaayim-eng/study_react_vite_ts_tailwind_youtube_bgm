import { FC, memo } from "react";
import { Youtube } from "../atoms/Youtube";
import { YoutubeVideoType } from "../../types/youtubeType";

type Props = {
  video: YoutubeVideoType;
};

export const Card: FC<Props> = memo((props) => {
  const { video } = props;
  // console.log("video => ", video);

  return (
    <li>
      <Youtube videoId={video.id.videoId} />
      <div className="mt-3">
        <h3 className="font-medium leading-snug line-clamp-3">
          {video.snippet.title}
        </h3>
      </div>
    </li>
  );
});
