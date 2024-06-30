import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link
        href={address}
        className="transition-all duration-300 ease-in-out hover:text-sky-500"
      >
        <Icon className="text-2xl sm:hidden" />
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
