import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
const Header = () => {
  return (
    <div className="flex justify-between p-4 max-w-6xl mx-auto">
      <div className="flex gap-4 ">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div>
        <Link
          href={"/"}
          className="text-2xl font-bold bg-sky-500 py-1 px-2 rounded-md"
        >
          Ozdb
        </Link>
      </div>
    </div>
  );
};

export default Header;
