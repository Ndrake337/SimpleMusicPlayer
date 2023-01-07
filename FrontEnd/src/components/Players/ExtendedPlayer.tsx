import albumCover from "../../assets/images/AlbumCover.png";
import PlayerButtons from "./PlayerButtons";
import {} from "react";

interface PlayerProps {
  size: "Full-Size" | "Small-Size" | "Compact";
}

export default function Player({ size }: PlayerProps) {
  return (
    <div
      className={`bg-custom-light-purple text-custom-light-gray flex flex-col ${
        size === "Full-Size" ? "p-9" : "p-8 w-fit"
      } rounded-lg `}
    >
      <div
        className={`${
          size === "Full-Size"
            ? "flex flex-col mb-7"
            : "flex flex-row mb-7 p-0 items-center "
        }`}
      >
        <img
          src={albumCover}
          className={size !== "Full-Size" ? " w-1/6" : "mb-7"}
        />
        <div
          className={`flex flex-col ${size !== "Full-Size" ? " ml-7" : null}`}
        >
          <strong className="text-2xl ">Title Of The Song</strong>
          <span className="opacity-70 text-xl">artist</span>
        </div>
      </div>
      <PlayerButtons />
      {size !== "Compact" ? (
        <div className="mt-7">
          <h2>progress bar</h2>
        </div>
      ) : null}
    </div>
  );
}
