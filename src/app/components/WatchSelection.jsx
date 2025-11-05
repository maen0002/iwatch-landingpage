import WatchThumbnail from "./WatchThumbnail";
import Navy from "../../../public/navy.png";
import Mint from "../../../public/mint.png";
import Ocean from "../../../public/ocean.png";

const WatchSelection = ({ setColor }) => {
  return (
    <div className="flex col-start-2 col-end-3 justify-between mt-10">
      <WatchThumbnail colorWay={Navy} setColor={setColor} bgColor={"var(--color1)"} />
      <WatchThumbnail colorWay={Mint} setColor={setColor} bgColor={"var(--color2)"} />
      <WatchThumbnail colorWay={Ocean} setColor={setColor} bgColor={"var(--color3)"} />
    </div>
  );
};

export default WatchSelection;
