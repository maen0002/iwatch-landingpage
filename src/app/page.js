"use client";
import { useState } from "react";
import Image from "next/image";

import Menu from "./components/Menu";
import Button from "./components/Button";
import HeroTitle from "./components/HeroTitle";
import ColorSelection from "./components/ColorSelection";
import Watch from "./components/Watch";
import NextBtn from "./components/NextBtn";

export default function Home() {
  return (
    <div className="grid grid-cols-(--grid-cols-big) grid-rows-(--grid-rows-big) m-4">
      <Menu />
      <div className="grid grid-cols-subgrid grid-rows-subgrid row-span-3 col-start-2 col-end-5">
        <HeroTitle />
        <Button />
        <Watch />
        <ColorSelection />
        <NextBtn />
      </div>
    </div>
  );
}
