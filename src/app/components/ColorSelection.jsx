import Image from "next/image";
import { MdOutlineMoreVert } from "react-icons/md";

const ColorSelection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-0.5">
      <div className="bg-[var(--color1)] p-2 rounded-full border-white border-3 size-7"></div>
      <MdOutlineMoreVert />
      <div className="bg-[var(--color2)] p-2 rounded-full border-white border-2 size-6"></div>
      <MdOutlineMoreVert />
      <div className="bg-[var(--color3)] p-2 rounded-full border-white border-2 size-6"></div>
    </div>
  );
};

export default ColorSelection;
