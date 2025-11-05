import Image from "next/image";

const WatchThumbnail = ({ colorWay, setColor, bgColor }) => {
  return (
    <div className="grid cursor-pointer" onClick={() => setColor && setColor(colorWay)}>
      <Image src={colorWay} alt="Picture of the author" width={90} height={90} className="col-[1] row-[1] justify-self-center" />
      <div className="col-[1] row-[1] h-[60px] w-[130px] place-self-end z-[-1] rounded-lg opacity-[60%]" style={{ background: bgColor }} />
    </div>
  );
};

export default WatchThumbnail;
