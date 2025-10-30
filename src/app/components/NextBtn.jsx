import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const NextBtn = () => {
  return (
    <div class="flex row-start-4 row-end-5 items-center self-end">
      <IoIosArrowRoundBack class="size-[25px]" />
      <p>1</p>
      <IoIosArrowRoundForward class="size-[25px]" />
    </div>
  );
};

export default NextBtn;
