import Image from "next/image";

import Menu from "./components/Menu";
import Button from "./components/Button";
import HeroTitle from "./components/HeroTitle";
import ColorSelection from "./components/ColorSelection";
import WatchSelection from "./components/WatchSelection";
import NextBtn from "./components/NextBtn";

export default function Home() {
  return (
    <div className="grid-container">
      <Menu />
      <div class="grid grid-cols-subgrid grid-rows-subgrid row-span-3">
        <HeroTitle />
        <Button />
        <Image class="row-span-2" src="/navy.png" alt="Picture of the author" width={500} height={500} />
        <ColorSelection />
        <NextBtn />
        <WatchSelection />
      </div>
    </div>
  );
}
