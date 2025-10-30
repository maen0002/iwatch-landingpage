import Image from "next/image";

const WatchSelection = () => {
  return (
    <div className="flex col-start-2 col-end-3 justify-between mt-10">
      <div className="grid">
        <Image src="/navy.png" alt="Picture of the author" width={90} height={90} className="col-[1] row-[1] justify-self-center" />
        <div className="col-[1] row-[1] h-[60px] w-[130px] place-self-end bg-[var(--color1)] z-[-1] rounded-lg opacity-[60%]"></div>
      </div>
      <div className="grid">
        <Image src="/mint.png" alt="Picture of the author" width={90} height={90} className="col-[1] row-[1] justify-self-center" />
        <div className="col-[1] row-[1] h-[60px] w-[130px] place-self-end bg-[var(--color2)] z-[-1] rounded-lg opacity-[60%]"></div>
      </div>
      <div className="grid">
        <Image src="/ocean.png" alt="Picture of the author" width={90} height={90} className="col-[1] row-[1] justify-self-center" />
        <div className="col-[1] row-[1] h-[60px] w-[130px] place-self-end bg-[var(--color3)] z-[-1] rounded-lg opacity-[60%]"></div>
      </div>
    </div>
  );
};

export default WatchSelection;
