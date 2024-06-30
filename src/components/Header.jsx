import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Darkmode from "./Darkmode";
const Header = () => {
  return (
    <div
      className="relative z-50
     flex items-center justify-between p-4 max-w-7xl mx-auto"
    >
      <div className="flex gap-4 ">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <Darkmode />

        <Link
          href={"/"}
          className="relative text-2xl text-[#191510]] dark:text-gray-50 font-bold py-1 px-3 rounded-md"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-pink-500 to-yellow-500 rounded-lg opacity-50 "></div>
          <span className="relative z-50">Ozdb</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
