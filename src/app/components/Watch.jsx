"use client";
import { useState } from "react";
import Image from "next/image";
import WatchSelection from "./WatchSelection";
import Navy from "../../../public/navy.png";
import Mint from "../../../public/mint.png";
import Ocean from "../../../public/ocean.png";

const Watch = () => {
  const [color, setColor] = useState(Navy);
  return (
    <div className="grid grid-cols-subgrid grid-rows-subgrid row-[1/4]">
      <Image className="row-span-2" src={color} alt="Picture of the author" width={500} height={500} />
      <WatchSelection setColor={setColor} />
    </div>
  );
};

export default Watch;
