import play from "../../assets/icons/play.svg";
import playBack from "../../assets/icons/play-back.svg";
import playForward from "../../assets/icons/play-forward.svg";

export default function PlayerButtons() {
  return (
    <div className="flex flex-row gap-50 justify-center mr-minus">
      <img src={playBack} />
      <img src={play} />
      <img src={playForward} />
    </div>
  );
}
