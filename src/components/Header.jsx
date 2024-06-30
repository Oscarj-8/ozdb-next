import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Darkmode from "./Darkmode";
const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
      <div className="flex gap-4 ">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <Darkmode />
        <Link
          href={"/"}
          className="text-2xl text-gray-50 font-bold bg-sky-500 py-1 px-3 rounded-md"
        >
          Ozdb
        </Link>
      </div>
    </div>
  );
};

export default Header;
