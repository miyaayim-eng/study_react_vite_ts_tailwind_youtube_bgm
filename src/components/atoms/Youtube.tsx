import { FC, memo } from "react";

type Props = {
  videoId: string;
};

export const Youtube: FC<Props> = memo((props) => {
  const { videoId } = props;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden">
      <iframe
        id="ytplayer"
        // width="640"
        // height="360"
        src={url}
        className="w-full h-full"
      ></iframe>
    </div>
  );
});
