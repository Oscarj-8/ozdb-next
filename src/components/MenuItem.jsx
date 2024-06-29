import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className="hover:text-sky-500">
        <Icon className="text-2xl sm:hidde " />
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
