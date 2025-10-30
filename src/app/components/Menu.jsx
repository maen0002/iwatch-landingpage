import { DiApple } from "react-icons/di";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";

const Menu = () => {
  return (
    <div className="menu">
      <DiApple />
      <div>
        <ul className="flex gap-20">
          <li>Mac</li>
          <li>iPhone</li>
          <li>iPad</li>
          <li>
            <span>iWatch</span>
          </li>
          <li>Support</li>
        </ul>
      </div>
      <div className="flex gap-2">
        <IoSearch />
        <RxDividerVertical />
        <FiShoppingBag />
      </div>
    </div>
  );
};

export default Menu;
