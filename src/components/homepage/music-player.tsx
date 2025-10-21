import { ServerImage } from "@/components/universal/ServerImage";
import { MusicPlayerClient } from "./MusicPlayerClient";

export const MusicPlayer = () => {
  return (
    <MusicPlayerClient
      albumArt={
        <ServerImage id={10} width={60} height={60} priority quality={100} />
      }
    />
  );
};
